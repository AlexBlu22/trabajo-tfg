<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class developers extends Model
{
    use HasFactory;

    protected $fillable = [
        'developers_name',
    ];

    
    public function games(){
        return $this belongsToMany(games::class);
    }

    

}
