<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class product extends Model
{
    use HasFactory;

    protected $fillable = [
        'product_name',
        'number_copies',
        'price';
    ];

    public function games(){
        return $this hasMany(games::class);
    }

    
    public function orders(){
        return $this belongsToMany(order::class);
    }

    
    public function stores(){
        return $this belongsToMany(store::class);
    }


}
