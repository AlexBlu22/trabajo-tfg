<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class languaje extends Model
{
    use HasFactory;

    protected $fillable = [
        'id_languaje','languaje_name','games_id_games'
    ];

    protected $primaryKey = 'id_languaje';
}
