<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class order extends Model
{
    use HasFactory;

    protected $fillable = [
        'order_name',
        'total_price',
        'discount',
        'user_id',
    ];

    
    public function users(){
        return $this belongsTo(user::class);
    }

    
    public function products(){
        return $this hasMany(product::class);
    }

}
