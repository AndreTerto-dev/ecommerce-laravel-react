<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call(TeamSeeder::class);

        $this->call(CategorySeeder::class);

        $this->call(BrandSeeder::class);

        $this->call(ProductSeeder::class);

        User::factory()->admin()->create([
            'name' => 'Admin',
            'email' => 'admin@gmail.com',
            'password' => Hash::make('123456789'),
        ]);

        User::factory()->vendor()->create([
            'name' => 'Vendor',
            'email' => 'vendor@gmail.com',
            'password' => Hash::make('123456789'),
        ]);

        User::factory()->create([
            'name' => 'Regular User',
            'email' => 'user@gmail.com',
            'password' => Hash::make('123456789'),
        ]);
    }
}
