<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class comments extends Model
{
    use HasFactory;

    protected $fillable = [
        'id_user',
        'body',
    ];
    
    public function users(){
        return $this belongsTo(User::class);
    }
    
    public function articles(){
        return $this belongsToMany(article::class);
    }
}
