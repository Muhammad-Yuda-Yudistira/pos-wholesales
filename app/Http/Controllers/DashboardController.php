<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Product;
use App\Models\Sales_order;

class DashboardController extends Controller
{
    public function index(){
        $totalProduct=Product::count();
        $revenue=Sales_order::sum('total_amount');
        return Inertia::render('Dashboard', [
            'totalProduct' => $totalProduct,
            'revenue' => $revenue
        ]);
    }
}
