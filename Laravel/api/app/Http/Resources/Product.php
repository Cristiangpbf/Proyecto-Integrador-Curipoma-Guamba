<?php

namespace App\Http\Resources;

use App\Category;
use Illuminate\Http\Resources\Json\JsonResource;

class Product extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id'=>$this->id,
            'name'=>$this->name,
            'dimensions'=>$this->dimensions,
            'flavor'=>$this->flavor,
            'texture'=>$this->texture,
            'consumption_time'=>$this->consumption_time,
            'img_url'=>$this->img_url,
            'description'=>$this->description,
            'package_amount'=>$this->package_amount,
            'category'=> "/api/categories/".$this->category_id,
            'created_at'=>$this->created_at,
            'updated_at'=>$this->updated_at
        ];
    }
}
