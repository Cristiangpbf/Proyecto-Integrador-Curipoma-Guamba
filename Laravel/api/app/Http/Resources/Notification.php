<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Notification extends JsonResource
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
            'Mensaje'=>$this->message,
            'Pedido'=>"/api/orders/".$this->order_id,
            'Fecha'=>$this->updated_at
        ];
    }
}
