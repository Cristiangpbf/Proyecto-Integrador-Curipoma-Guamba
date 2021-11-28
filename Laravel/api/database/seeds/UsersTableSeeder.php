<?php

use App\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UsersTableSeeder extends Seeder
{

    public function run()
    {
        // Vaciar la tabla
        User::truncate();
        //$faker = \Faker\Factory::create();

        // Crear la misma clave para todos los usuarios (Encriptado)
        $password = Hash::make('123123');

        User::create([
            'name' => 'Administrador',
            'email' => 'admin@prueba.com',
            'business_name'=>'Cono Superior',
            'ruc'=>'00000000001',
            'phone'=>'0999999999',
            'address'=>'Condores',
            'type'=>'admin',
            'password' => $password,
        ]);

        // Generar algunos usuarios para la aplicacion
        /*for ($i = 0; $i < 10; $i++) {
            User::create([
                'name' => $faker->name,
                'business_name'=>$faker->name,
                'ruc'=>$faker->creditCardNumber,
                'phone'=>$faker->phoneNumber,
                'address'=>$faker->address,
                'type'=>'client',
                'email' => $faker->email,
                'password' => $password,
            ]);
        }*/
    }
}
