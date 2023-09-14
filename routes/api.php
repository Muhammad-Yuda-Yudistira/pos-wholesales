<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\CustomerController;
use App\Http\Controllers\API\UserController;
use App\Http\Controllers\API\EmployeeController;
use App\Http\Controllers\API\SupplierController;
use App\Http\Controllers\API\ProductController;
use App\Http\Controllers\API\CategoriesController;
use App\Http\Controllers\API\SalesOrderController;
use App\Http\Controllers\API\CoaController;

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
    Route::post('/supplier/add',[SupplierController::class,'addNewSupplier']);
    Route::get('/supplier/show/{id}',[SupplierController::class,'showSupplier']);
    Route::put('/supplier/update/{id}',[SupplierController::class,'updateSupplier']);
    Route::get('supplier/show_all',[SupplierController::class,'showAllSupplier']);
    Route::post('/product/add_new_product',[ProductController::class,'addNewProduct']);
    Route::get('/product/view_all',[ProductController::class,'viewAllProduct']);
    Route::get('/product/show/{id}',[ProductController::class,'showProduct']);
    Route::put('/product/update/{id}',[ProductController::class,'updateProduct']);
    Route::post('/product/search',[ProductController::class,'searchProduct']);
    Route::post('/product/add_stock',[ProductController::class,'addStockToProduct']);
    Route::get('/product/display_all_inventory',[ProductController::class,'displayAllinventory']);
    Route::get('/product/receive_new_stock',[ProductController::class,'receiveNewStock']);
    Route::post('/coa/add_new_coa',[CoaController::class,'addNewCoa']);
    Route::get('/coa/view_all_coa',[CoaController::class,'viewAllCoa']);
    Route::post('/category/add_new_category',[CategoriesController::class,'addNewCategory']);
    Route::get('/category/view_all_category',[CategoriesController::class,'viewAllCategory']);
    Route::get('/category/view_category_with_product',[CategoriesController::class,'viewCategoryWithProduct']);
    Route::post('/sales_order/store',[SalesOrderController::class,'store']);
});
