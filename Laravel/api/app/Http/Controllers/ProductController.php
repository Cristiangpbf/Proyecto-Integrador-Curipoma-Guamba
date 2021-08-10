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
        'package_amount'=>'required|integer'
    ];

    private static $messages=[
        'required'=>'El campo :attribute es obligatorio.',
        'string'=>'El campo :attribute no tiene el formato correcto.',
    ];

    public function index(){
        return response()->json(new ProductCollection(Product::all()), 200);
    }

    public function show(Product $product){
        return new ProductResource($product);
    }

    /**
     * @param Category $category
     * @return \Illuminate\Http\JsonResponse
     */
    //Productos de la categoria
    public function indexFiltered(Category $category){
        return response()->json(ProductResource::collection($category->products),200);
    }

    /**
     * @param Category $category
     * @param Product $product
     * @return \Illuminate\Http\JsonResponse
     */
    //Producto de la categoria
    public function productCategory(Category $category,Product $product)
    {
        $product = $category->products()->where('id',$product->id)->firstOrFail();
        return response()->json($product, 200);
    }

    /**
     * @param Request $request
     * @param Category $category
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request, Category $category){

        $request->validate(self::$rules, self::$messages);

        $product = $category->products()->save(new Product($request->all()));
        return response()->json($product, 201);
    }

    public function update(Request $request, Category $category,Product $product){

        $request->validate(self::$rules, self::$messages);

        $product = $category->products()->where('id',$product->id)->update($request->all());
        return response()->json($product, 200);
    }

    public function delete(Category $category,Product $product){
        $category->products()->where('id',$product->id)->delete();
        return response()->json(null, 204);
    }
}
