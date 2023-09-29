<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Validator;


class Inventory extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function product(){
        return $this->belongsTo(Product::class, 'product_id', 'id');
    }


        protected static function boot()
    {
        parent::boot();

        static::saving(function ($inventory) {
            $validator = Validator::make($inventory->toArray(), [
                'quantity_in_stock' => 'min:0',
            ]);

            if ($validator->fails()) {
                return false; 
            }

            return true;
        });
    }
}
