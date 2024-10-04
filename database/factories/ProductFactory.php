<?php

namespace Database\Factories;

use App\Models\Product;
use App\Models\Brand;
use App\Models\Category;
use App\Models\Team;
use Illuminate\Database\Eloquent\Factories\Factory;

class ProductFactory extends Factory
{
    protected $model = Product::class;

    public function definition()
    {
        return [
            'name' => $this->faker->word(),
            'description' => $this->faker->sentence(),
            'price' => $this->faker->randomFloat(2, 10, 1000), 
            'stock_quantity' => $this->faker->randomNumber(),
            'brand_id' => Brand::query()->inRandomOrder()->first()->id,  
            'category_id' => Category::query()->inRandomOrder()->first()->id, 
            'team_id' => Team::query()->inRandomOrder()->first()->id,  
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}
