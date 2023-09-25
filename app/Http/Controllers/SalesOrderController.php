<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Product;
use App\Models\Categories;
use App\Models\Sales_order;
use App\Models\Oder_item as OrderItem;

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
        return redirect()->route('sales_order.index')->with('response',$id);
    }

    public function counter_plus(Request $request){
        $id=$request->item_id;
        $item=OrderItem::find($id);
        $item->quantity++;
        $item->subtotal=$item->quantity * $item->product->price;
        $item->save();
        return back()->with('id_sales',$this->sales_id->id);
    }

    public function counter_minus(Request $request){
        $id=$request->item_id;
        $item=OrderItem::find($id);
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
}
