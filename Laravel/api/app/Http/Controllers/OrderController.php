<?php

namespace App\Http\Controllers;

use App\Order;
use App\Http\Resources\Order as OrderResource;
use App\Http\Resources\OrderCollection;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    private static $rules =[
        'comment'=>'string',
        'state'=>'required|string',
        'delivery_date'=>'date',
    ];

    private static $messages=[
        'required'=>'El campo :attribute es obligatorio.',
        'string'=>'El campo :attribute no tiene el formato correcto.',
        'date'=>"El campo :attribute no tiene el formato correcto."
    ];

    public function index(){
        return new OrderCollection(Order::paginate());
    }
    public function show(Order $order){
        return response()->json(new OrderResource($order), 200);
    }
    public function store(Request $request){

        $request->validate(self::$rules, self::$messages);

        $order = Order::create($request->all());
        return response()->json($order, 201);
    }
    public function update(Request $request, Order $order){

        $request->validate(self::$rules, self::$messages);

        $order->update($request->all());
        return response()->json($order, 200);
    }
    public function delete(Order $order){
        $order->delete();
        return response()->json(null, 204);
    }
}
