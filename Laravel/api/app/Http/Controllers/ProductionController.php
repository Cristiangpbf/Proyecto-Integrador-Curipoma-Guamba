<?php

namespace App\Http\Controllers;

use App\Production;
use App\Http\Resources\Production as ProductionResource;
use App\Http\Resources\ProductionCollection;
use Illuminate\Http\Request;

class ProductionController extends Controller
{
    public function index(){
        return new ProductionCollection(Production::paginate());
    }
    public function show(Production $production){
        return response()->json(new ProductionResource($production), 200);
    }
    public function store(Request $request){
        $production = Production::create($request->all());
        return response()->json($production, 201);
    }
    public function update(Request $request, Production $production){
        $production->update($request->all());
        return response()->json($production, 200);
    }
    public function delete(Production $production){
        $production->delete();
        return response()->json(null, 204);
    }
}
