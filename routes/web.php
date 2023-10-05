<?php

use App\Http\Controllers\API\SalesOrderController;
use App\Http\Controllers\AuthenticationController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\InventoryController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\SalesOrderController as SalesOrder;
use App\Http\Controllers\SettingController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('/login',[AuthenticationController::class,'login'])->name('login');
Route::get('/register',[AuthenticationController::class,'register'])->name('register');
Route::post('/login',[AuthenticationController::class,'loginStore'])->name('login');


Route::middleware('auth')->group(function () {
Route::get('/',[DashboardController::class,'index'])->name('dashboard');
Route::get('/user',[UserController::class,'index'])->name('user');
Route::get('/user/edit/{id}',[UserController::class,'edit'])->name('user.edit');
Route::post('/user/update',[UserController::class,'update'])->name('user.update');
Route::get('/product',[ProductController::class,'index'])->name('product.index');
Route::post('/product/store',[ProductController::class,'store'])->name('product.store');
Route::get('/inventory',[InventoryController::class,'index'])->name('inventory.index');
Route::post('/inventory/store',[InventoryController::class,'store'])->name('inventory.store');
Route::get('/sales_order',[SalesOrder::class,'index'])->name('sales_order.index');
Route::post('/sales_order/new_transaction',[SalesOrder::class,'new_transaction'])->name('sales_order.new_transaction');
Route::post('/sales_order/add_item',[SalesOrder::class,'add_item'])->name('sales_order.add_item');
Route::post('/sales_order/cancel',[SalesOrder::class,'cancel'])->name('sales_order.cancel');
Route::post('/sales_order/counter_plus',[SalesOrder::class,'counter_plus'])->name('sales_order.counter_plus');
Route::post('/sales_order/counter_minus',[SalesOrder::class,'counter_minus'])->name('sales_order.counter_minus');
Route::post('/sales_order/pay',[SalesOrder::class,'pay'])->name('sales_order.pay');
Route::get('/invoice/{prefix}/{year}/{number}',[SalesOrder::class,'invoice'])->name('sales_order.invoice');
Route::get('/struk/{prefix}/{year}/{number}',[SalesOrder::class,'struk'])->name('sales_order.struk');
Route::get('/list_order',[SalesOrder::class,'list_order'])->name('sales_order.list_order');
Route::get('/customer',[CustomerController::class,'index'])->name('customer.index');
Route::get('/settings',[SettingController::class,'index'])->name('settings.index');
});










Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
