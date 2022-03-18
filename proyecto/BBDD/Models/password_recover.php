<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class password_recover extends Model
{
    use HasFactory;

    protected $fillable = [
        'id_password','password_email'
    ];

    protected $primaryKey = 'id_password';
}
