<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    protected $table = 'orders';

    protected $guarded = [];

    /**
     * Define o relacionamento com o modelo ShippingDetail.
     */
    public function shippingDetails()
    {
        return $this->hasOne(ShippingDetail::class);
    }

    /**
     * Define o relacionamento com o modelo User.
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
