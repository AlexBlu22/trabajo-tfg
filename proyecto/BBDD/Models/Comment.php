<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    use HasFactory;

    protected $fillable = [
        'id_comment','id_author','id_article','commentscol'
    ];

    protected $primaryKey = 'id_comment';

    public function user(){
        return $this->belongsTo(user::class);
    }

    public function article(){
        return $this->belongsTo(article::class);
    }
}
