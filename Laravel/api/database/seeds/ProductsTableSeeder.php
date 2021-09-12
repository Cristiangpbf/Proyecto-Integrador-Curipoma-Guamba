<?php

use App\Product;
use Illuminate\Database\Seeder;

class ProductsTableSeeder extends Seeder
{

    public function run()
    {
        //Vaciar la tabla
        Product::Truncate();
        $faker = \Faker\Factory::create();



        //Crear datos ficticios en la tabla
        for($i = 0; $i < 15; $i++){
            $aux = $i+1;
            $image_name = $faker->image('public/storage/products', 400, 300, null, false);
            Product::create([
                'name'=>"producto{$aux}",
                'dimensions'=>"{$faker->numberBetween(1, 10)}cm x {$faker->numberBetween(1, 10)}cm x {$faker->numberBetween(1, 10)}cm",
                'flavor' =>$faker->word,
                'texture'=>$faker->word,
                'consumption_time'=>$faker->sentence,
//                'img_url'=>$faker->imageUrl(),
                'img_url'=>'products/'.$image_name,
                'description'=>$faker->paragraph,
                'package_amount'=>$faker->numberBetween(30, 150),
                'category_id'=>$faker->numberBetween(1,5),
            ]);
        }
    }
}
