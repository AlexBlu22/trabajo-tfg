<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class game_has_categorie extends Model
{
    use HasFactory;

    protected $fillable = [
        'games_id_gc','categories_id_gc','games_id_gc'
    ];
}
