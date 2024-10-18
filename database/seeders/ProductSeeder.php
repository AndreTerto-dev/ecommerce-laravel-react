<?php

namespace Database\Seeders;

use App\Models\Product;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    public function run()
    {
        for ($i = 0; $i < 10; $i++) {
            Product::factory()->create([
                'brand_id' => rand(1, 10),
                'category_id' => rand(1, 10),
                'team_id' => rand(1, 20),
            ]);
        }
    }
}
