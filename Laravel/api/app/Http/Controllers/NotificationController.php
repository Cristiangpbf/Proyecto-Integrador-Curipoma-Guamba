<?php

namespace App\Http\Controllers;

use App\Notification;
use App\Http\Resources\Notification as NotificationResource;
use App\Http\Resources\NotificationCollection;
use App\Order;
use Illuminate\Http\Request;

class NotificationController extends Controller
{
    private static $messages=[
        'required'=>'El campo :attribute es obligatorio.',
        'string'=>'El campo :attribute no tiene el formato correcto.'
    ];

    /**
     * @param \App\Order $order
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(Order $order){
        return response()->json(NotificationResource::collection($order->notifications),200);
    }

    /**
     * @param Order $order
     * @param Notification $notification
     * @return \Illuminate\Http\JsonResponse
     */
    public function show(Order $order, Notification $notification)
    {
        $notification = $order->notifications()->where('id',$notification->id)->firstOrFail();
        return response()->json($notification,200);
    }

    /**
     * @param Request $request
     * @param Order $order
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request, Order $order){

        $request->validate([
            'message'=> 'required|string'
        ], self::$messages);

        $notification = $order->notifications()->save(new Notification($request->all()));
        return response()->json($notification, 201);
    }


    public function update(Request $request,Order $order, Notification $notification){

        $request->validate([
            'message'=> 'required|string'
        ], self::$messages);

        $notification =$order->notifications()->where('id',$notification->id)->update($request->all());
//        $notification->update($request->all());
        return response()->json($notification, 200);
    }

    public function delete(Order $order, Notification $notification){
        $order->notifications()->where('id',$notification->id)->delete();
        //$notification->delete();
        return response()->json(null, 204);
    }
}
