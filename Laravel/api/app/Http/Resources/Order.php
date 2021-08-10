<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Order extends JsonResource
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
            'Comentario'=>$this->comment,
            'Estado'=>$this->state,
            'Cliente'=>"/api/users/".$this->user_id,
            'Fecha Solicitud'=>$this->created_at,
            'Fecha Entrega'=>$this->delivery_date,
        ];
    }
}
