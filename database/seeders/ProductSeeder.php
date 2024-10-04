<?php

namespace Database\Seeders;

use App\Models\Product;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    public function run()
    {
        Product::factory()->count(30)->create([
            'brand_id' => rand(1, 30),  
            'category_id' => rand(1, 30),
            'team_id' => rand(1, 30),    
        ]);
    }
}
