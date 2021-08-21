<?php

namespace App\Http\Resources;

use App\User;

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
            'comment'=>$this->comment,
            'state'=>$this->state,
            'user'=>User::find($this->user_id),
            'created_at'=>$this->created_at,
            'updated_at'=>$this->updated_at,
            'delivery_date'=>$this->delivery_date,
        ];
    }
}
