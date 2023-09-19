<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $guarded=[];


    public function inventory(){
        return $this->hasOne(Inventory::class, 'product_id', 'id');
    }

    public function category(){
        return $this->belongsTo(Categories::class);
    }
}
