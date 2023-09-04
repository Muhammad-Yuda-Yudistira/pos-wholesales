<?php

namespace App\Http\Controllers\API;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use App\Http\Resources\GetResource;
use App\Http\Controllers\Controller;
use App\Http\Resources\PostResource;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = User::all();
        if (!Auth::check()) {
            return response()->json(['message' => 'Unauthorized'], 401);
        }else{
            return new GetResource(true,'get all users',$data);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $data = User::find($id);
        if (!Auth::check()) {
            return response()->json(['message' => 'Unauthorized'], 401);
        }else{
            if(empty($data)){
                return response()->json(['message' => 'Not Found'], 404);
            }else{
                return (new GetResource(true,'show details user',$data))->response()->setStatusCode(200);
            }
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
       // Cari pengguna berdasarkan ID yang diberikan dalam URL
        $user = User::find($id);

        if (!$user) {
            return response()->json(['message' => 'Pengguna tidak ditemukan'], 404);
        }

        // Validasi permintaan
        $validator = Validator::make($request->all(), [
            'new_username' => 'required|string|max:255', 
            'password' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        // Periksa apakah kata sandi yang diberikan cocok dengan kata sandi pengguna saat ini
        if (!Hash::check($request->password, $user->password)) {
            return response()->json(['message' => 'Kata sandi salah'], 401);
        }

        // Perbarui username pengguna
        $user->username = $request->new_username;
        $user->save();
        
            return (new PostResource(true,'Username hasbeen changed successfully',$user))->response()->setStatusCode(200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
