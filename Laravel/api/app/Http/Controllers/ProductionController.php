<?php

namespace App\Http\Controllers;

use App\Production;
use App\Http\Resources\Production as ProductionResource;
use App\Http\Resources\ProductionCollection;
use Illuminate\Http\Request;

class ProductionController extends Controller
{
    private static $rules =[
        'total_sales'=>'required|integer',
        'liters'=>'required|numeric',
        'time'=>'required|string',
        'performance'=>'required|string',
        'employee_id'=>'required',
        'product_id'=>'required',
    ];

    private static $messages=[
        'required'=>'El campo :attribute es obligatorio.',
        'string'=>'El campo :attribute no tiene el formato correcto.',
        'integer'=>"El campo :attribute no tiene el formato correcto.",
        'numeric'=>"El campo :attribute no tiene el formato correcto."
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
