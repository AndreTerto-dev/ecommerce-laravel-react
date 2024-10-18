<?php

namespace Database\Factories;

use App\Models\Brand;
use Illuminate\Database\Eloquent\Factories\Factory;

class BrandFactory extends Factory
{
    protected $model = Brand::class;

    public function definition()
    {
        $brands = [
            'Nike',
            'Adidas',
            'Puma',
            'Umbro',
            'Kappa',
            'Under Armour',
            'Joma',
            'Le Coq Sportif',
            'Macron',
            'New Balance',
        ];

        return [
            'name' => $this->faker->unique()->randomElement($brands), // Seleciona uma marca aleatória da lista
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}
