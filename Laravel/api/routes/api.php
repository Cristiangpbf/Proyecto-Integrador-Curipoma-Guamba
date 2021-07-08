<?php

use App\Cart;
use App\Category;
use App\Employee;
use App\Notification;
use App\Order;
use App\Product;
use App\Production;
use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//Route::middleware('auth:api')->get('/user', function (Request $request) {
//    return $request->user();
//});

//Rutas Employee
Route::get('employees', 'EmployeeController@index');
Route::get('employees/{employee}', 'EmployeeController@show');
Route::post('employees', 'EmployeeController@store');
Route::put('employees/{employee}', 'EmployeeController@update');
Route::delete('employees/{employee}', 'EmployeeController@delete');

//Rutas Cart
Route::get('carts', 'CartController@index');
Route::get('carts/{cart}', 'CartController@show');
Route::post('carts', 'CartController@store');
Route::put('carts/{cart}', 'CartController@update');
Route::delete('carts/{cart}', 'CartController@delete');

//Rutas Category
Route::get('categories', 'CategoryController@index');
Route::get('categories/{category}', 'CategoryController@show');
Route::post('categories', 'CategoryController@store');
Route::put('categories/{category}', 'CategoryController@update');
Route::delete('categories/{category}', 'CategoryController@delete');

//Rutas Notification
Route::get('notifications', 'NotificationController@index');
Route::get('notifications/{notification}', 'NotificationController@show');
Route::post('notifications', 'NotificationController@store');
Route::put('notifications/{notification}', 'NotificationController@update');
Route::delete('notifications/{notification}', 'NotificationController@delete');

//Rutas Order
Route::get('orders', 'OrderController@index');
Route::get('orders/{order}', 'OrderController@show');
Route::post('orders', 'OrderController@store');
Route::put('orders/{order}', 'OrderController@update');
Route::delete('orders/{order}', 'OrderController@delete');

//Rutas Product
Route::get('products', 'ProductController@index');
Route::get('products/{product}', 'ProductController@show');
Route::post('products', 'ProductController@store');
Route::put('products/{product}', 'ProductController@update');
Route::delete('products/{product}', 'ProductController@delete');

//Rutas Production
Route::get('productions', 'ProductionController@index');
Route::get('productions/{production}', 'ProductionController@show');
Route::post('productions', 'ProductionController@store');
Route::put('productions/{production}', 'ProductionController@update');
Route::delete('productions/{production}', 'ProductionController@delete');

