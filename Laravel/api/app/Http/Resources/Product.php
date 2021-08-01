<?php

namespace App\Http\Resources;

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
            //'id'=>$this->id,
            'Nombre'=>$this->name,
            'Dimensiones'=>$this->dimensions,
            'Categoria'=>"/api/categories/".$this->category_id,
            'Sabor'=>$this->flavor,
            'Textura'=>$this->texture,
            'Tiempo consumo'=>$this->consumption_time,
            'Descripción'=>$this->description,
            'Unidades'=>$this->package_amount,
        ];
    }
}
