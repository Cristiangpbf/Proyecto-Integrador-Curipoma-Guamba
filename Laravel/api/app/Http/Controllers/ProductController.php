<?php

namespace App\Http\Controllers;

use App\Category;
use App\Product;
use App\Http\Resources\Product as ProductResource;
use App\Http\Resources\ProductCollection;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    private static $rules =[
        'name'=>'required|string',
        'dimensions'=>'required|string',
        'flavor'=>'required|string',
        'texture'=>'required|string',
        'consumption_time'=>'required|string',
        'img_url'=>'required|string',
        'description'=>'required|string',
        'package_amount'=>'required|integer',
        'category_id'=>'required'
    ];

    private static $messages=[
        'required'=>'El campo :attribute es obligatorio.',
        'string'=>'El campo :attribute no tiene el formato correcto.',
    ];

    public function index(){
        return response()->json(new ProductCollection(Product::all()), 200);
    }

    public function indexFiltered(Category $category){
        return response()->json($category->products, 200);
    }

    public function productCategory(Product $product){
        return response()->json($product->category, 200);
    }

    public function show(Product $product){
        return response()->json(new ProductResource($product), 200);
    }
    public function store(Request $request){

        $request->validate(self::$rules, self::$messages);

        $product = Product::create($request->all());
        return response()->json($product, 201);
    }
    public function update(Request $request, Product $product){
        $product->update($request->all());
        return response()->json($product, 200);
    }
    public function delete(Product $product){
        $product->delete();
        return response()->json(null, 204);
    }
}
