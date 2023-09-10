<?php

namespace Database\Seeders;
use Faker\Factory as FakerFactory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SupplierSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = FakerFactory::create();

        for ($i = 0; $i < 30; $i++) {
            \DB::table('suppliers')->insert([
                'company_name' => $faker->firstName,
                'contact_name' => $faker->lastName,
                'contact_email' => $faker->unique()->safeEmail,
                'contact_phone' => $faker->phoneNumber,
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
