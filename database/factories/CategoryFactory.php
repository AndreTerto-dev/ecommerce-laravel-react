<?php

namespace Database\Factories;

use App\Models\Category;
use Illuminate\Database\Eloquent\Factories\Factory;

class CategoryFactory extends Factory
{
    protected $model = Category::class;

    public function definition()
    {
        $categories = [
            'Clubes',
            'Seleções',
            'Retrô',
            'Edição Especial',
            'Infantil',
            'Feminino',
            'Treino',
            'Goleiro',
            'Casual',
            'Colecionador',
        ];

        return [
            'name' => $this->faker->unique()->randomElement($categories),
            'description' => $this->faker->sentence(),
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}
