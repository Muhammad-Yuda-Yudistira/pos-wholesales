<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->word,
            'category_id' => $this->faker->numberBetween(1, 9), // Gantilah 10 dengan jumlah kategori yang Anda miliki
            'description' => $this->faker->paragraph,
            'price' => $this->faker->randomFloat(2, 10, 1000), // Harga acak antara 10 dan 1000 dengan 2 digit desimal
            'cost_price' => $this->faker->randomFloat(2, 5, 500), // Harga beli acak antara 5 dan 500 dengan 2 digit desimal
        ];
    }
}
