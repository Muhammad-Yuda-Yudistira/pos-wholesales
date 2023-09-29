<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Product;
use App\Models\Inventory;
use App\Models\InventoryAdjustment as Adjustment;
use App\Models\Categories;
class InventoryController extends Controller
{
    public function index(){
        return Inertia::render('Inventory/Inventory',
        [
            'products' => Product::orderBy('id','desc')->get(),
            'inventories'=>Inventory::with('product','product.category')->orderBy('id','desc')->get(),
            'categories'=>Categories::all(),
            'new_stock'=>Adjustment::with('product')->orderBy('created_at','desc')->limit(15)->get()
        ]
    );
    }
    public function store(Request $request){
        $inventory=Inventory::find($request->product_id);
        $inventory->quantity_in_stock+=$request->quantity_change;
        $inventory->save();
        Adjustment::create($request->all());
        return redirect()->route('inventory.index')->with('message','Stock Added Successfully');
    }

}
