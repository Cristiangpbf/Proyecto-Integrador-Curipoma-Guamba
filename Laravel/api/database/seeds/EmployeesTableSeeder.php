<?php

use App\Employee;
use Illuminate\Database\Seeder;

class EmployeesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //Vaciar la tabla
        Employee::Truncate();
        $faker = \Faker\Factory::create();

        //Crear datos ficticios en la tabla
        for($i = 0; $i < 20; $i++){
            Employee::create([
                'name' => $faker->name,
                'email'=> $faker-> email,
                'phone' => $faker->phoneNumber,
                'dni' => '1750024067'
            ]);
        }
    }
}
