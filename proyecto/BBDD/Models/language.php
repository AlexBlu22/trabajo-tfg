<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class language extends Model
{
    use HasFactory;


    protected $fillable = [
        'language_name',
    ];

    public function games(){
        return $this belongsToMany(games::class);
    }

}
