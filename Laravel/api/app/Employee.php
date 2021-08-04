<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    protected $fillable = ['name', 'email', 'phone', 'dni'];

    //Relacion muchos a muchos
    public function products()
    {
        return $this->belongsToMany('App\Product', 'Productions')->withTimestamps()->withPivot('total_sales','liters','time','performance');
    }

    public function productions()
    {
        return $this->hasMany('App\Production');
    }
}
