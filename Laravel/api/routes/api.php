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

Route::group(['middleware'=>['cors']], function (){
    //Rutas publicas
//Usuario
    Route::post('register', 'UserController@register');
    Route::post('login', 'UserController@authenticate');
//Visualizacion Productos
    Route::get('products', 'ProductController@index');
    Route::get('products/{product}', 'ProductController@show');
    Route::get('categories/{category}/products', 'ProductController@indexFiltered'); //Productos de la categoria
    Route::get('categories/{category}/products/{product}', 'ProductController@productCategory'); //Producto de la categoria
    Route::get('orders', 'OrderController@index');
//Visualizacion Categorías
    Route::get('categories', 'CategoryController@index');


//Rutas privadas
    Route::group(['middleware' => ['jwt.verify']], function () {

        //Rutas User
        Route::get('user', 'UserController@getAuthenticatedUser'); //Usuario autenticado
        Route::get('users', 'UserController@index'); //Todos los usuarios
        Route::get('users/{user}', 'UserController@show');
        Route::post('logout', 'UserController@logout');
        Route::put('user/{user}', 'UserController@update');

        //Rutas Employee
        Route::get('employees', 'EmployeeController@index');
        Route::get('employees/{employee}', 'EmployeeController@show');
        Route::get('employee/{employee}/production', 'EmployeeController@showEmployeeProd');

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

        Route::get('categories/{category}', 'CategoryController@show');
        Route::post('categories', 'CategoryController@store');
        Route::put('categories/{category}', 'CategoryController@update');
        Route::delete('categories/{category}', 'CategoryController@delete');

        //Rutas Notification
        Route::get('orders/{order}/notifications', 'NotificationController@index');
        Route::get('orders/{order}/notifications/{notification}', 'NotificationController@show');
        Route::post('orders/{order}/notifications', 'NotificationController@store');
        Route::put('notifications/{notification}', 'NotificationController@update');
        Route::delete('notifications/{notification}', 'NotificationController@delete');

        //Rutas Order
        //Route::get('users/{user}/orders', 'OrderController@index');
        //Route::get('users/{user}/orders/{order}', 'OrderController@show');

        Route::get('orders/{order}', 'OrderController@show');
        Route::get('orders/{order}/products', 'OrderController@showOrderProducts'); //Productos de la orden con info del pivot
        Route::post('orders', 'OrderController@store');
        Route::put('orders/{order}', 'OrderController@update');
        Route::delete('orders/{order}', 'OrderController@delete');

        //Rutas Product

        Route::post('categories/{category}/products', 'ProductController@store');
        Route::put('products/{product}', 'ProductController@update');
        Route::delete('products/{product}', 'ProductController@delete');

        //Rutas Production
        Route::get('productions', 'ProductionController@index');
        Route::get('productions/{production}', 'ProductionController@show');
        Route::post('productions', 'ProductionController@store');
        Route::put('productions/{production}', 'ProductionController@update');
        Route::delete('productions/{production}', 'ProductionController@delete');
    });
});









