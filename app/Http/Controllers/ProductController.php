<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Categories as Category;

class ProductController extends Controller
{
    public function index(){
        return Inertia::render('Products/ProductPage',[
            'title'=>'Product',
            'data'=>Product::with('category')->withSum('inventory as stock','quantity_in_stock')->orderBy('id','desc')->get()
        ]);
    }
    public function create(){
        return Inertia::render('Products/AddProductPage',[
            'title'=>'Add New Product',
            'categories'=>Category::all(),
            'product'=>Product::with('category')->orderBy('id','desc')->limit(10)->get()
        ]);
    }

    public function store(Request $request){
        $request->validate([
            'name'=>'required',
        ]);
        Product::create($request->all());
        return back()->with('message','Product Added Successfully');
    }
}
