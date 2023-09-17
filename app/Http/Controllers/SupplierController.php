<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Supplier;

class SupplierController extends Controller
{
    public function index(){
        return Inertia::render('SupplierPage',[
            'title' => 'Supplier',
            'data'=>Supplier::paginate(15)
        ]);
    }
}
