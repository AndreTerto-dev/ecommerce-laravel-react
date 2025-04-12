<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    protected $table = 'categories';

    protected $guarded = [];

    /**
     * Relacionamento de uma categoria com a sua categoria pai.
     */
    public function parent()
    {
        return $this->belongsTo(Category::class, 'parent_id');
    }

    /**
     * Relacionamento de uma categoria com suas subcategorias.
     */
    public function subcategories()
    {
        return $this->hasMany(Category::class, 'parent_id');
    }
}
