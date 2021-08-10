<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

class Notification extends Model
{
    protected $fillable = ['message'];

    //Pertenece a
    public function order()
    {
        return $this->belongsTo('App\Order');
    }
}
