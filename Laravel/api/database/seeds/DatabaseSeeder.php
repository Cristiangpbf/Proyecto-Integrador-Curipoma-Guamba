<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Schema;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        Schema::disableForeignKeyConstraints();
        $this->call(UsersTableSeeder::class);
        $this->call(CategoriesTableSeeder::class);
        $this->call(ProductsTableSeeder::class);
        $this->call(OrdersTableSeeder::class);
        $this->call(NotificationsTableSeeder::class);
        $this->call(EmployeesTableSeeder::class);
        $this->call(ProductionsTableSeeder::class);
        $this->call(CartsTableSeeder::class);
        Schema::enableForeignKeyConstraints();
    }
}
