<?php

namespace App\Http\Controllers;

use App\Http\Resources\Product as ProductResource;
use App\Mail\NewOrder;
use App\Order;
use App\Http\Resources\Order as OrderResource;
use App\Http\Resources\OrderCollection;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;

class OrderController extends Controller
{
    private static $rules =[
        'comment'=>'string',
        'state'=>'required|string',
        'delivery_date'=>'date|nullable',
    ];

    private static $messages=[
        'required'=>'El campo :attribute es obligatorio.',
        'string'=>'El campo :attribute no tiene el formato correcto.',
        'date'=>"El campo :attribute no tiene el formato correcto."
    ];

    public function index(){
        $coll = new OrderCollection(DB::select('select * from orders where state not like ?',['en carrito']));
        return response()->json($coll, 200);
    }
    public function show(Order $order){
        return response()->json(new OrderResource($order), 200);
    }

    public function showOrderProducts(Order $order){
//        return response()->json(ProductResource::collection($order->products),200);

        return response()->json($order->products, 200);;
    }
    public function store(Request $request){

        $request->validate(self::$rules, self::$messages);

        $order = Order::create($request->all());
        Mail::to($order->user)->send(new NewOrder($order));
        return response()->json(new OrderResource($order), 201);
    }
    public function update(Request $request, Order $order){

        $request->validate(self::$rules, self::$messages);

        $order->update($request->all());
        return response()->json($order, 200);
    }
    public function delete(Order $order){
        $order->products()->detach();
        $order->notifications()->delete();
        $order->delete();
        return response()->json(null, 204);
    }
}
