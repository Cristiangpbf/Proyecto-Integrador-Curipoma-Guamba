<?php

namespace App\Http\Controllers;

use App\Cart;
use Illuminate\Http\Request;
use App\Http\Resources\Cart as CartResource;
use App\Http\Resources\CartCollection;

class CartController extends Controller
{
    private static $rules =[
        'product_units'=>'required|integer',
    ];

    private static $messages=[
        'required'=>'El campo :attribute es obligatorio.',
        'integer'=>'El campo :attribute debe ser numérico.'
    ];

    public function index(){
        return new CartCollection(Cart::paginate());
    }
    public function show(Cart $cart){
        return response()->json(new CartResource($cart), 200);
    }
    public function store(Request $request){

        $request->validate(self::$rules, self::$messages);

        $cart = Cart::create($request->all());
        return response()->json($cart, 201);
    }
    public function update(Request $request, Cart $cart){
        $cart->update($request->all());
        return response()->json($cart, 200);
    }
    public function delete(Cart $cart){
        $cart->delete();
        return response()->json(null, 204);
    }
}
