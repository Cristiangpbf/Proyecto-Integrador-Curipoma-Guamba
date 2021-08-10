<?php

namespace App\Http\Resources;

use App\Order;
use App\Product;
use Illuminate\Http\Resources\Json\JsonResource;

class Cart extends JsonResource
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
            'Cantidad'=>$this->product_units,
            'Orden'=>"/api/orders/".$this->order_id,
            'Producto'=>"/api/products/".$this->product_id,
        ];
    }
}
