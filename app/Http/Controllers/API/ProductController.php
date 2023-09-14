<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Product;
use App\Http\Resources\PostResource;
use App\Models\Inventory;

class ProductController extends Controller
{
    public function addNewProduct(Request $request)
    {
        $validator=Validator::make($request->all(),[
            'name'=>'required',
            'description'=>'required',
            'price'=>'required',
            'cost_price'=>'required',
        ]);
        if($validator->fails()){
            return response()->json([
                'status'=>false,
                'message'=>$validator->errors(),
            ],422);
        }
        $product=Product::create($request->all());
        return (new PostResource(true,'Product has been created',$product))->response()->setStatusCode(201);
    }


    public function viewAllProduct(){
        $product = Product::with('category')->withSum('inventory as stock','quantity_in_stock')->orderBy('id','desc')->get();
        return (new PostResource(true,'All Products',$product))->response()->setStatusCode(200);
    }

    public function showProduct($id){
        $product = Product::findOrFail($id);
        return (new PostResource(true,'show Product detail',$product))->response()->setStatusCode(200);
    }

    public function updateProduct(Request $request, $id){
        $validator=Validator::make($request->all(),[
            'name'=>'required',
            'description'=>'required',
            'price'=>'required',
            'cost_price'=>'required',
        ]);
        if($validator->fails()){
            return response()->json([
                'status'=>false,
                'message'=>$validator->errors(),
            ],422);
        }
        $product = Product::findOrFail($id);
        $product->update($request->all());
        return (new PostResource(true,'Product has been updated',$product))->response()->setStatusCode(200);
    }

    public function searchProduct(Request $request){
        $keyword = $request->input('keyword');
        $product = Product::with('category')->where('name','like','%'.$keyword.'%')->get();
        return (new PostResource(true,'All Products',$product))->response()->setStatusCode(200);
    }

    public function addStockToProduct(Request $request){
        $validator=Validator::make($request->all(),[
            'product_id'=>'required|numeric',
            'quantity_in_stock'=>'required|numeric',
        ]);
        if($validator->fails()){
            return response()->json([
                'status'=>false,
                'message'=>$validator->errors(),
            ],422);
        }
        $inventory=Inventory::create($request->all());
        return (new PostResource(true,'Stock has been added',$inventory))->response()->setStatusCode(201);
    }

    public function displayAllinventory(){
        $inventory = Inventory::with('product')->orderBy('id','desc')->get();
        return (new PostResource(true,'All Inventory',$inventory))->response()->setStatusCode(200);
    }

    public function receiveNewStock(){
        $inventory = Inventory::with('product')->orderBy('id','desc')->get();
        return (new PostResource(true,'Receive New Stock',$inventory))->response()->setStatusCode(200);
    }
}
