<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\CustomerController;
use App\Http\Controllers\API\UserController;
use App\Http\Controllers\API\EmployeeController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function () {
//     $data=User::all();
// });
Route::post('/register',[AuthController::class,'register']);
Route::post('/login',[AuthController::class,'login']);
Route::middleware('auth:sanctum')->group(function(){
    Route::apiResource('users',UserController::class);
    Route::post('/employee/add',[EmployeeController::class,'store']);
    Route::get('/employee/show_detail_employee/{id}',[EmployeeController::class,'show']);
    Route::put('/employee/update/{id}',[EmployeeController::class,'update']);
    Route::post('/employee/search',[EmployeeController::class,'search']);
    Route::get('/employee/view_all_employee',[EmployeeController::class,'viewAllEmployee']);
    Route::post('/customer/add_new_customer',[CustomerController::class,'addNewCustomer']);
    Route::get('/customer/edit_customer/{id}',[CustomerController::class,'editCustomer']);
    Route::put('/customer/update_customer/{id}',[CustomerController::class,'updateCustomer']);
    Route::post('/customer/search',[CustomerController::class,'searchCustomer']);
    Route::get('/customer/view_all_customer',[CustomerController::class,'viewAllCustomer']);
});
