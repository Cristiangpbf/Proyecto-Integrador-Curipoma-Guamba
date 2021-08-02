<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Production extends Model
{
    protected $fillable = ['total_sales', 'liters', 'time', 'performance','employee_id','product_id'];

}
