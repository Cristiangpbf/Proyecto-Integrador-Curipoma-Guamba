<?php

use App\Production;
use Illuminate\Database\Seeder;

class ProductionsTableSeeder extends Seeder
{

    public function run()
    {
        //Vaciar la tabla
        Production::Truncate();
        $faker = \Faker\Factory::create();

        //Crear datos ficticios en la tabla
        for($i = 0; $i < 15; $i++){
            Production::create([
                'total_sales'=>$faker->numberBetween(50,150),
                'liters'=>$faker->numberBetween(3, 5),
                'time'=>"{$faker->numberBetween(4, 8)} horas",
                'performance'=>'Excelente',
                'employee_id'=>$faker->numberBetween(1,5),
                'product_id'=>$faker->numberBetween(1,15)
            ]);
        }
    }
}
