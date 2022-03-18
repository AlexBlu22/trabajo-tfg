<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class article extends Model
{
    use HasFactory;


    protected $fillable = [
        'article_title',
        'article_author',
        'publication_date',
        'number_views',
        'number_likes',
        'body',
    ];


    public function users(){
        return $this belongsTo(User::class);
    }

    
    public function comments(){
        return $this hasMany(comments::class);
    }


}
