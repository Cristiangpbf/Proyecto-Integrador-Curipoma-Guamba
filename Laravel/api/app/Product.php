<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = ['name', 'dimensions', 'flavor', 'texture', 'consumption_time', 'img_url', 'description', 'package_amount', 'category_id'];

    //Pertenece a
    public function category()
    {
        return $this->belongsTo('App\Category');
    }

    //Relacion muchos a muchos
    public function orders()
    {
        return $this->belongsToMany('App\Order', 'Carts')->withTimestamps()->withPivot('product_units');
    }

    public function employees()
    {
        return $this->belongsToMany('App\Employee', 'Productions')->withTimestamps()->withPivot('total_sales','liters','time','performance');;
    }
}
