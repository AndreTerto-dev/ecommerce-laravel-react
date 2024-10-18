<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class TeamFactory extends Factory
{
    public function definition(): array
    {
        $teams = [
            'América-MG',
            'Atlético-MG',
            'Athletico-PR',
            'Bahia',
            'Botafogo',
            'Corinthians',
            'Cruzeiro',
            'Cuiabá',
            'Flamengo',
            'Fluminense',
            'Fortaleza',
            'Goiás',
            'Grêmio',
            'Internacional',
            'Palmeiras',
            'Red Bull Bragantino',
            'Santos',
            'São Paulo',
            'Sport',
            'Vasco da Gama',
        ];

        $countries = ['Brasil'];

        return [
            'name' => $this->faker->unique()->randomElement($teams), // Escolhe um time da lista
            'country' => $this->faker->randomElement($countries),     // Define o país do time
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}
