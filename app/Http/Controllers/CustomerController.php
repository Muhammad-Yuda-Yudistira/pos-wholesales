<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Customer;

class CustomerController extends Controller
{
    public function index(){
        return Inertia::render('CustomerPage',[
            'title' => 'Customer',
            'data'=>Customer::paginate(15)
        ]);
    }
}
