<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

class Order extends Model
{
    protected $fillable = ['comment', 'state', 'delivery_date'];

    public static function boot()
    {
        parent::boot();
        static::creating(function ($order) {
            $order->user_id = Auth::id();
        });
    }

    //Tiene muchos
    public function notifications()
    {
        return $this->hasMany('App\Notification');
    }

    //Pertenece a
    public function user()
    {
        return $this->belongsTo('App\User');
    }

    //Relacion muchos a muchos
    public function products()
    {
        return $this->belongsToMany('App\Product', 'Carts')->withTimestamps()->withPivot('product_units');
    }
}
