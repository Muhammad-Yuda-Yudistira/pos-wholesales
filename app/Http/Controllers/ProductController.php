<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Product;
use App\Models\Categories;
use App\Models\Inventory;

class ProductController extends Controller
{
    public function index(){
        return Inertia::render('Product/Product',[
            'product'=>Product::with('category')->orderBy('id','desc')->get(),
            'category'=>Categories::all(),
        ]);
    }

    public function store(Request $request){
        $request->validate([
            'name'=>'required',
            'price'=>'required',
            'category_id'=>'required',
            'description'=>'required',
            'cost_price'=>'required',
        ]);
        try {
            $product=Product::create($request->all());
            Inventory::create([
                'product_id'=>$product->id,
            ]);
        return redirect()->route('product.index')->with('message','Product Added Successfully');
        } catch (\Exception $e) {
            return Inertia::render('Product.index')->with('message', 'Failed to Add Product: ' . $e->getMessage());
        }
    }
}
