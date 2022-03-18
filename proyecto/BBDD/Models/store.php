<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class store extends Model
{
    use HasFactory;

    protected $fillable = [
        'num_games',
        'store_name',
    ];


    public function products(){
        return $this hasMany(product::class);
    }

}
