<?php

use App\Order;
use Illuminate\Database\Seeder;

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

        //Crear datos ficticios en la tabla
        for($i = 0; $i < 20; $i++){
            Order::create([
                'comment'=>$faker->paragraph(1),
                'state'=>'entregado',
                'delivery_date'=>$faker->dateTime
            ]);
        }
    }
}
