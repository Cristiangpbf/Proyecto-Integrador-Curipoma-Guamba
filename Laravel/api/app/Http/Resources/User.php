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
            //'id'=>$this->id,
            'Nombre'=>$this->name,
            'Nombre del Negocio'=>$this->business_name,
            'RUC'=>$this->ruc,
            'Teléfono'=>$this->phone,
            'Dirección'=>$this->address,
            'Tipo'=>$this->type,
            'Correo'=>$this->email,
            //'Contraseña'=>$this->password
        ];
    }
}
