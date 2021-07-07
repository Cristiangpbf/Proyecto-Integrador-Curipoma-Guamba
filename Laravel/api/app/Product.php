<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = ['name', 'dimensions', 'flavor', 'texture', 'consumption_time', 'img_url', 'description', 'package_amount'];
}
