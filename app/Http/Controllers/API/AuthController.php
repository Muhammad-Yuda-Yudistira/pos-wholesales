<?php

namespace App\Http\Controllers\API;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\AuthResource;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function register(Request $request){
        $validator = Validator::make($request->all(), [
            'username' => 'required|string|unique:users',
            'email' => 'required|string|email|unique:users',
            'password' => 'required|string|min:6',
            'confirm_password' => 'required|same:password',
        ]);
        if($validator->fails()){
            return response()->json($validator->errors(), 422);
        }
        $user = User::create([
            'username' => $request->username,
            'email' => $request->email,
            'password' => bcrypt($request->password),
        ]);
        $token= $user->createToken('auth_token')->plainTextToken;
        return (new AuthResource(true, 'User created', [
            'username' => $user->username,
            'token' => $token
        ]))->response()->setStatusCode(201);

    }

    public function login(Request $request){
        $validator= Validator::make($request->all(), [
            'username'=>'required|string',
            'password'=>'required|string'
        ]);

        if($validator->fails()){
            return response()->json($validator->errors(), 422);
        }

        if(Auth::attempt([
            'username' => $request->username,
            'password' => $request->password
        ])){
            $user = Auth::user();
            $token= $user->createToken('auth_token')->plainTextToken;
            return (new AuthResource(true, 'Login Success', [
                'username' => $user->username,
                'token' => $token,
                'data'=>$user
            ]))->response()->setStatusCode(200);
        }else{
            return response()->json(['message' => 'Login failed username or password tidak sesuai'], 401);
        }

    }
}
