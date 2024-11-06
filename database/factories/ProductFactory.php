<?php

namespace Database\Factories;

use App\Models\Product;
use App\Models\Brand;
use App\Models\Category;
use App\Models\Team;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class ProductFactory extends Factory
{
    protected $model = Product::class;

    public function definition()
    {
        $productNames = [
            'Camisa Home',
            'Camisa Away',
            'Agasalho',
            'Jaqueta de Treino',
            'Camisa Retrô',
            'Camiseta de Torcedor',
            'Uniforme de Goleiro',
            'Camisa Infantil',
            'Camisa Feminina',
            'Conjunto de Treino',
        ];

        $name = $this->faker->unique()->randomElement($productNames);

        return [
            'name' => $name,
            'slug' => Str::slug($name),
            'description' => $this->faker->sentence(),
            'price' => $this->faker->randomFloat(2, 100, 1000),
            'stock_quantity' => $this->faker->numberBetween(1, 100),
            'discount' => $this->faker->numberBetween(10, 80),
            'launch' => false,
            'brand_id' => Brand::pluck('id')->random(),
            'category_id' => Category::pluck('id')->random(),
            'team_id' => Team::pluck('id')->random(),
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}
