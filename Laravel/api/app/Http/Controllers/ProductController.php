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
        'name'=>'required|string|max:100',
        'dimensions'=>'required|string|max:10',
        'flavor'=>'required|string|max:10',
        'texture'=>'required|string|max:50',
        'consumption_time'=>'required|string|max:10',
        'img_url'=>'required|image|dimensions:min_width=200,min_height=200',
        'description'=>'required|string',
        'package_amount'=>'required|integer|max:1000'
    ];

    private static $messages=[
        'name.required'=>'El campo nombre es obligatorio.',
        'dimensions.required'=>'El campo dimensiones es obligatorio.',
        'flavor.required'=>'El campo sabor es obligatorio.',
        'texture.required'=>'El campo textura es obligatorio.',
        'consumption_time.required'=>'El campo tiempo de consumo es obligatorio.',
        'img_url.required'=>'Inserte una imagen.',
        'description.required'=>'El campo descripción es obligatorio.',
        'package_amount.required'=>'El campo cantidad es obligatorio.',
        'string'=>'El campo :attribute no tiene el formato correcto.',
        'img_url.image'=>'La imagen no tiene el formato correcto.',
        'package_amount.integer'=>'La cantidad debe ser un valor entero.',
        'package_amount.max'=>'La cantidad no debe ser mayo a :max dígitos.'
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

        $path = $request->img_url->store('public/products');
        $product->img_url = 'products/'. basename($path);
        $product->save();

        return response()->json(new ProductResource($product), 201);
    }

    public function update(Request $request, Product $product){

//        $request->validate(self::$rules, self::$messages);
        $path = $request->img_url[0]->store('public/products');

        $request->merge(['img_url'=>'products/'. basename($path)]);

        $product->update($request->all());
        return response()->json($product, 200);
    }

    public function delete(Product $product){
        $product->delete();
        return response()->json(null, 204);
    }
}
