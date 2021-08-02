<?php

namespace App\Http\Controllers;

use App\Category;
use App\Product;
use App\Http\Resources\Product as ProductResource;
use App\Http\Resources\ProductCollection;
use Illuminate\Http\Request;

class ProductController extends Controller
{
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
