<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Inertia\Inertia;
use App\Models\Employee;

class UserController extends Controller
{
    public function index(){
        return Inertia::render('User/User',[
            'users' => User::with(['employee'])->get()
        ]);
    }

    public function edit($id){
        $user = User::findOrFail($id);
        return Inertia::render('User/FormUpdateUser',[
            'user' => $user
        ]); 
    }

    public function update(Request $request){
        Employee::create($request->all());
        return redirect()->route('user')->with('message', 'Employee created successfully');
    }
}
