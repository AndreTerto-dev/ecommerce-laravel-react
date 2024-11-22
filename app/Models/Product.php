<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Product extends Model
{
    use HasFactory;

    protected $table = 'products';

    protected $fillable = [
        'name',
        'description',
        'price',
        'new_price',
        'installment_count',
        'installment_value',
        'stock_quantity',
        'launch',
        'discount',
        'slug',
        'brand_id',
        'team_id',
        'category_id',
        'image_path',
    ];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function team()
    {
        return $this->belongsTo(Team::class);
    }

    public function brand()
    {
        return $this->belongsTo(Brand::class);
    }

    public function images()
    {
        return $this->hasMany(ProductImage::class, 'product_id');
    }

    // Função para calcular o preço com desconto
    public function calculateDiscountedPrice()
    {
        return $this->discount ? $this->price - ($this->price * ($this->discount / 100)) : $this->price;
    }

    // Função para calcular o valor das parcelas
    public function calculateInstallments($newPrice)
    {
        $installmentCount = 12; // Define o número de parcelas
        return $installmentCount > 0 ? $newPrice / $installmentCount : 0;
    }

    // Evento de criar ou atualizar
    protected static function booted()
    {
        static::saving(function ($product) {
            // Calcular o preço com desconto
            $product->new_price = $product->calculateDiscountedPrice();

            // Calcular o valor de cada parcela
            $product->installment_value = $product->calculateInstallments($product->new_price);
        });
    }
}
