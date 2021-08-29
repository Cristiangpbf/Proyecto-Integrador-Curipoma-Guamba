<?php

namespace App\Http\Resources;
use Illuminate\Http\Resources\Json\JsonResource;

class User extends JsonResource
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
            'business_name'=>$this->business_name,
            'ruc'=>$this->ruc,
            'phone'=>$this->phone,
            'address'=>$this->address,
            'type'=>$this->type,
            'email'=>$this->email,
            'created_at'=>$this->created_at,
            'updated_at'=>$this->updated_at
            //'Contraseña'=>$this->password
        ];
    }
}
