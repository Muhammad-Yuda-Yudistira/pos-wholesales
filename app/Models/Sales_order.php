<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sales_order extends Model
{
    use HasFactory;


    protected $guarded=[];
    protected $table='sales_orders';

    public function customer(){
        return $this->belongsTo(Customer::class);
    }
}
