<?php

namespace App\Http\Controllers;

use App\Cart;
use Illuminate\Http\Request;
use App\Http\Resources\Cart as CartResource;
use App\Http\Resources\CartCollection;

class CartController extends Controller
{
    public function index(){
        return new CartCollection(Cart::paginate());
    }
    public function show(Cart $cart){
        return response()->json(new CartResource($cart), 200);
    }
    public function store(Request $request){
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
