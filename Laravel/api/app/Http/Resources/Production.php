<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Employee;
use App\Product;

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
//            'id'=>$this->id,
            'total_sales'=>$this->total_sales,
            'liters'=>$this->liters,
            'time'=>$this->time,
            'performance'=>$this->performance,
            'employee_id'=>$this->employee_id,
            'product'=>Product::find($this->product_id),
            'Fecha'=>$this->created_at,
        ];
    }
}
