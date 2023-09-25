<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Data kategori yang ingin Anda masukkan
        $categories = [
            'Makanan',
            'Minuman',
            'Fashion',
            'Perlengkapan Rumah Tangga',
            'Elektronik',
            'Kesehatan',
            'Kecantikan',
            'Olahraga',
            'Rokok',
            'Hobi',
            'Lainnya',
            // Tambahkan lebih banyak kategori jika diperlukan
        ];

        foreach ($categories as $category) {
            \DB::table('categories')->insert([
                'name' => $category,
            ]);
        }
    }
}
