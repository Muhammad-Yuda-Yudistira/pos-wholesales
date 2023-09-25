<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index(){
        return Inertia::render('User/User',[
            'users' => User::all()
        ]);
    }
}
