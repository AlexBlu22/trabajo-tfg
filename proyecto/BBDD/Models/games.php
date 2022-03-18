<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class games extends Model
{
    use HasFactory;

    
    protected $fillable = [
        'games_name',
        'game_price',
        'game_release_date',
    ];


    public function languages(){
        return $this hasMany(language::class);
    }

    
    public function developers(){
        return $this hasMany(developers::class);
    }

    public function designers(){
        return $this hasMany(designers::class);
    }

    public function categories(){
        return $this hasMany(categories::class);
    }

    public function products(){
        return $this belongsToMany(product::class);
    }

}
