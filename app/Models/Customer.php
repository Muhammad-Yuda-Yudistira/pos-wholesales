<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function sales_order(){
        return $this->hasMany(SalesOrder::class);
    }


    public static function unregistered(){
       return Customer::create([
            'first_name' => 'Unregistered',
            'last_name' => 'unregistered',
            'email' => 'unregistered',
            'phone' => 'unregistered',
            'address' => 'unregistered'
        ]);
    }
}
