<?php

namespace App\Http\Controllers;

use App\Production;
use App\Http\Resources\Production as ProductionResource;
use App\Http\Resources\ProductionCollection;
use Illuminate\Http\Request;

class ProductionController extends Controller
{
    private static $rules =[
        'total_sales'=>'required|integer|max:1000',
        'liters'=>'required|integer|max:10',
        'time'=>'required|string',
        'performance'=>'required|string',
        'employee_id'=>'required',
        'product_id'=>'required',
    ];

    private static $messages=[
        'total_sales.required'=>'El campo cantidad es obligatorio.',
        'liters.required'=>'El campo cantidad es obligatorio.',
        'time.required'=>'El campo cantidad es obligatorio.',
        'performance.required'=>'El campo cantidad es obligatorio.',
        'string'=>'El campo :attribute no tiene el formato correcto.',
        'total_sales.integer'=>"El campo cantidad debe ser un número entero.",
        'liters.integer'=>"El campo litros debe ser un número entero.",
    ];

    public function index(){
        return new ProductionCollection(Production::paginate());
    }
    public function show(Production $production){
        return response()->json(new ProductionResource($production), 200);
    }

    public function store(Request $request){

        $request->validate(self::$rules, self::$messages);

        $production = Production::create($request->all());
        return response()->json($production, 201);
    }
    public function update(Request $request, Production $production){

        $request->validate(self::$rules, self::$messages);

        $production->update($request->all());
        return response()->json($production, 200);
    }
    public function delete(Production $production){
        $production->delete();
        return response()->json(null, 204);
    }
}
