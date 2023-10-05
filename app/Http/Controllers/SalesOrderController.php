<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Product;
use App\Models\Categories;
use App\Models\Sales_order;
use App\Models\InventoryAdjustment as Adjustment;
use App\Models\Oder_item as OrderItem;
use Illuminate\Support\Facades\DB;
use App\Models\Customer;

class SalesOrderController extends Controller
{
    protected $sales_id;
    public function __construct(){
        $this->sales_id=Sales_order::with('items','items.product')
        ->where('payment_status','unpaid')->orderBy('id','desc')->first();
    }
    public function index(){
        return Inertia::render('SalesOrder/SalesOrder',[
            'products' => Product::with('category','inventory')->get(),
            'categories'=>Categories::all(),
            'sales'=>Sales_order::with('items','items.product')
            ->where('payment_status','unpaid')->orderBy('id','desc')->get(),
        ]);
    }

    public function new_transaction(){
        if($this->sales_id){
            return redirect()->route('sales_order.index')->with('id_sales',$this->sales_id->id);
        }else{
            $sales_id = Sales_order::create([
                'order_date'=>date('Y-m-d'),
                'total_amount'=>0
            ]);
            return redirect()->route('sales_order.index')->with('id_sales',$sales_id->id);
        }
    }

    public function add_item(Request $request){
        $product_id=$request->productId;
        $order_id=$request->orderId;
        $product=Product::find($product_id);
        $existingRecord=OrderItem::where('order_id',$order_id)->where('product_id',$product_id)->first();
        if($existingRecord){
            $existingRecord->quantity++;
            $existingRecord->subtotal=$existingRecord->quantity * $existingRecord->product->price;
            $existingRecord->save();
        }else{
            OrderItem::create([
                'product_id'=>$product_id,
                'quantity'=>1,
                'order_id'=>$order_id,
                'subtotal'=>$product->price
            ]);
        }
        return redirect()->route('sales_order.index')->with('id_sales',$this->sales_id->id);
    }

    public function cancel(Request $request){
        $id=$request->sales_id;
        Sales_order::destroy($id);
        return back()->with('response',$id);
    }

    public function counter_plus(Request $request){
        $order_id=$request->order_id;
        $product_id=$request->product_id;
        $item=OrderItem::find($order_id);
        $item->quantity++;
        $item->subtotal=$item->quantity * $item->product->price;
        $item->save();
        return back()->with('id_sales',$this->sales_id->id);
    }

    public function counter_minus(Request $request){
        $order_id=$request->order_id;
        $product_id=$request->product_id;
        $item=OrderItem::find($order_id);
        if($item->quantity<=1){
            $item->delete();
            return back()->with('id_sales',$this->sales_id->id);
        }else{
            $item->quantity--;
            $item->subtotal=$item->quantity * $item->product->price;
            $item->save();
        }
        return back()->with('id_sales',$this->sales_id->id);
    }

    public function pay(Request $request){
        DB::beginTransaction();
        try{
            $subtotal=$request->subtotal;
            $id=$request->sales_id;
            $items=$request->items;
            $customer=($request->customer==null)?Customer::unregistered():Customer::find($request->customer);
            $invoice='INV/'.date('Y')."/".str_pad($id, 4, '0', STR_PAD_LEFT);
            Adjustment::productOrder($items);
            Sales_order::findOrFail($id)->update([
                'payment_status'=>'paid',
                'total_amount'=>$subtotal,
                'invoice'=>$invoice,
                'customer_id'=>$customer->id
            ]);
            $date=Sales_order::findOrFail($id)->order_date;
            DB::commit();
            return back()->with('response',[
                'invoice'=>$invoice,
                'subtotal'=>$subtotal,
                'date'=>$date
            ]);
        }catch(\Exception $e){
            DB::rollBack();
            return Inertia::render('SalesOrder/SalesOrder', [
                'products' => Product::with('category','inventory')->get(),
                'categories'=>Categories::all(),
                'sales'=>Sales_order::with('items','items.product')
                ->where('payment_status','unpaid')->orderBy('id','desc')->get(),
                'errors' => $e->getMessage()
            ]);
        }
    }


    public function list_order(){
        return Inertia::render('SalesOrder/ListOrder',[
            'list_order'=>Sales_order::with('items','items.product')->orderBy('id','desc')->paginate(10),
        ]);
    }

    public function invoice($prefix,$year,$number){
        $invoice=$prefix.'/'.$year.'/'.$number;
        $invoice=Sales_order::with('customer','items.product')->where('invoice',$invoice)->first();

        return Inertia::render('SalesOrder/Invoice',[
            'invoice'=>$invoice,
        ]);
    }
    public function struk($prefix,$year,$number){
        $invoice=$prefix.'/'.$year.'/'.$number;
        $invoice=Sales_order::with('customer','items.product')->where('invoice',$invoice)->first();

        return Inertia::render('SalesOrder/Struk',[
            'invoice'=>$invoice,
        ]);
    }
}
