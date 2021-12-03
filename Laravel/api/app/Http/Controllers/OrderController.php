<?php

namespace App\Http\Controllers;

use App\Http\Resources\Product as ProductResource;
use App\Mail\NewOrder;
use App\Order;
use App\Http\Resources\Order as OrderResource;
use App\Http\Resources\OrderCollection;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;

class OrderController extends Controller
{
    private static $rules =[
        'comment'=>'string|nullable',
        'state'=>'required|string',
        'delivery_date'=>'date|nullable',
    ];

    private static $messages=[
        'state.required'=>'El campo estado es obligatorio.',
        'string'=>'El campo :attribute no tiene el formato correcto.',
        'delivery_date.date'=>"La fecha no tiene el formato correcto."
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

    public function filterOrdersEstado(String $estado){
        if ($estado === '1'){
            $coll = new OrderCollection(DB::select('select * from orders where state not like ?',['en carrito']));
        }else if($estado === '2'){
            $coll = new OrderCollection(DB::select('select * from orders where state like ?',['en espera']));
        }else if($estado === '3'){
            $coll = new OrderCollection(DB::select('select * from orders where state like ?',['en proceso']));
        }else if($estado === '4'){
            $coll = new OrderCollection(DB::select('select * from orders where state like ?',['entregado']));
        }

        return response()->json($coll, 200);
    }

    /**
     * @param String $estado
     * @param String $user
     * @return \Illuminate\Http\JsonResponse
     */
    public function filterOrdersEstadoUser(String $estado, String $user){
        if ($estado === '1'){
            $coll = new OrderCollection(DB::select('select * from orders where state not like ? and user_id = ?',['en carrito',$user]));
        }else if($estado === '2'){
            $coll = new OrderCollection(DB::select('select * from orders where state like ? and user_id = ?',['en espera',$user]));
        }else if($estado === '3'){
            $coll = new OrderCollection(DB::select('select * from orders where state like ? and user_id = ?',['en proceso',$user]));
        }else if($estado === '4'){
            $coll = new OrderCollection(DB::select('select * from orders where state like ? and user_id = ?',['entregado',$user]));
        }

        return response()->json($coll, 200);
    }


    /**
     * @param String $user_id
     * @return \Illuminate\Http\JsonResponse
     */
    public function countProductsCartPerUser(String $user_id){
        $consulta = DB::select('SELECT COUNT(id) as hascart FROM orders WHERE user_id = ? and state like ?', [$user_id, 'en carrito']);
        $hasCart = $consulta[0]->hascart;
        if($hasCart == 1){
            $coll = DB::select('SELECT COUNT(*) as tot FROM carts where
                                        order_id = (SELECT id FROM orders WHERE user_id = ? and state like ?)',[$user_id, 'en carrito']);
            return response()->json($coll, 200);
        }else if($hasCart == 0){
            Order::create(['state'=>'en carrito']);
            $coll = DB::select('SELECT COUNT(*) as tot FROM carts where
                                        order_id = (SELECT id FROM orders WHERE user_id = ? and state like ?)',[$user_id, 'en carrito']);
            return response()->json($coll, 200);
        }
    }

    public function inCartOrder(String $user_id){
        $consulta = DB::select('select id from orders  where state like ? and user_id = ?',['en carrito',$user_id]);
        $order_id =$consulta[0]->id;
        $order = Order::find($order_id);
        return response()->json($order->products, 200);
    }

    public function getCartId(String $user_id){
        $consulta = DB::select('select id from orders  where state like ? and user_id = ?',['en carrito',$user_id]);
        $order_id =$consulta[0]->id;
        $order = Order::find($order_id);
        return response()->json($order, 200);
    }

    public function store(Request $request){
        $request->validate(self::$rules, self::$messages);
        $order = Order::create($request->all());
        //Mail::to($order->user)->send(new NewOrder($order));
        return response()->json(new OrderResource($order), 201);
    }

    public function update(Request $request, Order $order){

        $request->validate(self::$rules, self::$messages);

        $order->update($request->all());
        if ($order->state === 'en espera'){
            Mail::to($order->user)->send(new NewOrder($order));
        }
        return response()->json($order, 200);
    }
    public function delete(Order $order){
        $order->products()->detach();
        $order->notifications()->delete();
        $order->delete();
        return response()->json(null, 204);
    }
}
