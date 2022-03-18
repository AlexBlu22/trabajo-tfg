<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class game extends Model
{
    use HasFactory;

    protected $fillable = [
        'id_games','games_name','games_price','games_des','games_time','store_id_store','developers_id_developer','products_product_id','users_id_user','comments_id_comment','comments_id_author'
    ];

    protected $primaryKey = 'id_games';

    public function developer(){
        return $this->belongsToMany(developer::class);
    }

    
    public function designer(){
        return $this->belongsToMany(designer::class);
    }

    public function product(){
        return $this->belongsTo(product::class);
    }

    public function user(){
        return $this->belongsTo(game::class);
    }
    
}
