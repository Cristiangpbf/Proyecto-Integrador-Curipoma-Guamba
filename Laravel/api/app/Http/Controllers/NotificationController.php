<?php

namespace App\Http\Controllers;

use App\Notification;
use App\Http\Resources\Notification as NotificationResource;
use App\Http\Resources\NotificationCollection;
use Illuminate\Http\Request;

class NotificationController extends Controller
{
    private static $rules =[
        'message'=>'required|string',
        'order_id'=>'required'
    ];

    private static $messages=[
        'required'=>'El campo :attribute es obligatorio.',
        'string'=>'El campo :attribute no tiene el formato correcto.',
    ];

    public function index(){
        return new NotificationCollection(Notification::paginate());
    }
    public function show(Notification $notification){
        return response()->json(new NotificationResource($notification), 200);
    }
    public function store(Request $request){

        $request->validate(self::$rules, self::$messages);

        $notification = Notification::create($request->all());
        return response()->json($notification, 201);
    }
    public function update(Request $request, Notification $notification){
        $notification->update($request->all());
        return response()->json($notification, 200);
    }
    public function delete(Notification $notification){
        $notification->delete();
        return response()->json(null, 204);
    }
}
