<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Production extends JsonResource
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
            'Total producción'=>$this->total_sales,
            'Litros'=>$this->liters,
            'Tiempo'=>$this->time,
            'Rendimiento'=>$this->performance,
            'Trabajador'=>"/api/employees/".$this->employee_id,
            'Producto'=>"/api/products/".$this->product_id,
            'Fecha'=>$this->created_at,
        ];
    }
}
