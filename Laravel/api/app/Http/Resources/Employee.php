<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Employee extends JsonResource
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
            'Correo'=>$this->email,
            'Teléfono'=>$this->phone,
            'Cédula'=>$this->dni,
        ];
    }
}
