<?php

use App\Order;
use App\Product;
use Illuminate\Database\Seeder;
use Tymon\JWTAuth\Facades\JWTAuth;

class OrdersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //Vaciar la tabla
        Order::Truncate();
        $faker = \Faker\Factory::create();

        //Todos los usuarios
        $users = App\User::all();
        foreach ($users as $user) {
            JWTAuth::attempt(['email' => $user->email, 'password' => '123123']);

            $num_orders = 1;
            //Crear datos ficticios en la tabla
            if ($user->type == 'client') {
                for ($i = 0; $i < $num_orders; $i++) {
                    $order = Order::create([
                        'comment' => $faker->paragraph(2),
                        'state' => 'en espera',
                        'delivery_date' => $faker->dateTime
                    ]);
                }
            }
        }
    }
}
