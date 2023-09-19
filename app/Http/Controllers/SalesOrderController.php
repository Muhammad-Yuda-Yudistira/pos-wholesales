<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Product;

class SalesOrderController extends Controller
{
    public function index (){
        return Inertia::render('SalesOrder/SalesOrder',[
            "product"=>Product::all(),
        ]);
    }
}
