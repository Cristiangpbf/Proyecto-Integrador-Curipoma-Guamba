<?php

use App\Cart;
use Illuminate\Database\Seeder;

class CartsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //Vaciar la tabla
        Cart::Truncate();
        $faker = \Faker\Factory::create();

        //Crear datos ficticios en la tabla
        for($i = 0; $i < 20; $i++){
            Cart::create([
                'product_units'=>$faker->numberBetween(1, 500),
                'order_id'=>$faker->numberBetween(1,10),
                'product_id'=>$faker->numberBetween(1,15)
            ]);
        }


    }
}
