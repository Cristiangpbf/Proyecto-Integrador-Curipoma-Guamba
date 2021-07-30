<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $fillable = ['name', 'description'];

    //Tiene muchos
    public function products()
    {
        return $this->hasMany('App\Product');
    }
}
