<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class paymentcard extends Model
{
    use HasFactory;

    protected $fillable = [
        'paymentcard_number',
        'paymentcard_headline',
        'paymentcard_expiration_date',
        'paymentcard_type',
        'paymentcard_cvc',
        'user_id',
    ];
    
    public function users(){
        return $this belongsToOne(user::class);
    }

    public function payments(){
        return $this hasMany(payment::class);
    }

}
