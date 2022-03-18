<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class news extends Model
{
    use HasFactory;

    protected $fillable = [
        'id_Noticias','Noticias','Blog','articles_article_id'
    ];

    protected $primaryKey = 'id_Noticias';

}
