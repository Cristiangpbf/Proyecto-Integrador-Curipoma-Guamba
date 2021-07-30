<?php

use App\Notification;
use Illuminate\Database\Seeder;
use Tymon\JWTAuth\Facades\JWTAuth;

class NotificationsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //Vaciar la tabla
        Notification::Truncate();
        $faker = \Faker\Factory::create();

        //Todas las ordenes
        $orders = \App\Order::all();
        foreach ($orders as $order){
            Notification::create([
                'message'=>$faker->text,
                'order_id'=>$order->id,
            ]);
        }
    }
}
