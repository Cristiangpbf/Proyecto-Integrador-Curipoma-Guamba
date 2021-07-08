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
        for($i = 0; $i < 20; $i++){
            Production::create([
                'total_sales'=>$faker->randomNumber(2, true),
                'liters'=>$faker->randomNumber(2, true),
                'time'=>"{$faker->numberBetween(5, 8)} horas",
                'performance'=>'Excelente'
            ]);
        }
    }
}
