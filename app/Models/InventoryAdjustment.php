<?php

namespace App\Models;

use Inertia\Inertia;
use App\Models\Product;
use App\Models\Inventory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Validator;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class InventoryAdjustment extends Model
{
    use HasFactory;
    protected $table = 'inventory_adjustments';
    protected $guarded=[];

    public function product(){
        return $this->belongsTo(Product::class);
    }

    public static function productOrder($items){
        foreach ($items as $item) {
            $inventory = Inventory::find($item['product_id']);
            $currentQuantity = $inventory->quantity_in_stock;
            $newQuantity = $currentQuantity - $item['quantity'];
            if ($newQuantity < 0) {
                throw new \Exception('Stock '.$item['product']['name'].' tidak mencukupi!');
            }
            $inventory->quantity_in_stock = $newQuantity;
            $inventory->save();
        
            InventoryAdjustment::create([
                'product_id' => $item['product_id'],
                'quantity_change' => $item['quantity'],
                'adjustment_date' => now(),
                'reason' => 'Sales Order'
            ]);
        }
    }
}
