<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Product;
use App\Models\User;
class HomeController extends Controller
{
    public function index(){
        return Inertia::render('HomePage',[
            'title' => 'Home Page',
            'totalProduct'=>Product::count(),
            'totalUser'=>User::count(),
        ]);
    }
}
