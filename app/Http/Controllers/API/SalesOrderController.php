<?php

namespace App\Http\Controllers\API;

use App\Models\Customer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use App\Models\Sales_order as Order;
use App\Models\Oder_item as Item;
use Illuminate\Support\Facades\Validator;
use App\Http\Resources\PostResource;
use Illuminate\Validation\ValidationException;

class SalesOrderController extends Controller
{
    public function store(Request $request){
        try {
            DB::beginTransaction();
            if($request->customer_id ==null){
                $customer=Customer::create([
                    'first_name' => 'unregistered' ,
                    'last_name' => 'unregistered',
                    'email' => 'unregistered',
                    'phone' => 'unregistered',
                    'address' => 'unregistered',
                ]);
                $order = Order::create([
                    'customer_id' => $customer->id,
                    'order_date' => $request->order_date,
                    'total_amount' => $request->total_amount,
                    'payment_status' => $request->payment_status,
                ]);
                $orderItems = $request->item;
                foreach ($orderItems as $itemData) {
                    $orderItem = [
                        'order_id' =>  $order->id,
                        'product_id' => $itemData['product_id'],
                        'quantity' => $itemData['quantity'],
                        'subtotal' => $itemData['subtotal'],
                    ];
                    Item::insert($orderItem);
                }
            }else{
                $order = Order::create([
                    'customer_id' => $request->customer_id,
                    'order_date' => $request->order_date,
                    'total_amount' => $request->total_amount,
                    'payment_status' => $request->payment_status,
                ]);
                $orderItems = $request->item;
                foreach ($orderItems as $itemData) {
                    $orderItem = [
                        'order_id' =>  $order->id,
                        'product_id' => $itemData['product_id'],
                        'quantity' => $itemData['quantity'],
                        'subtotal' => $itemData['subtotal'],
                    ];
                    Item::insert($orderItem);
                }
            }
            DB::commit();
            return(new PostResource(true,'Transaction Successfully',$request->all()))->response()->setStatusCode(201);
        } catch (\Exception $e) {
            DB::rollback(); // Batalkan transaksi jika terjadi kesalahan
            throw new ValidationException(['database' => 'Database transaction failed: ' . $e->getMessage()]);
        }
    }



    // public function store(Request $request){
    //     $order = Order::create([
    //         'customer_id' => $request->customer_id,
    //         'order_date' => $request->order_date,
    //         'total_amount' => $request->total_amount,
    //         'payment_status' => $request->payment_status,
    //     ]);
    //     $orderItems = $request->item;
    //     foreach ($orderItems as $itemData) {
    //         $orderItem = [
    //             'order_id' =>  $order->id,
    //             'product_id' => $itemData['product_id'],
    //             'quantity' => $itemData['quantity'],
    //             'subtotal' => $itemData['subtotal'],
    //         ];
    //         Item::insert($orderItem);
    //     }
    //     return(new PostResource(true,'Transaction Successfully',$request->all()))->response()->setStatusCode(201);       
    // }
}
