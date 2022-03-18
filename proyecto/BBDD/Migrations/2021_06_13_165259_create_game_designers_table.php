<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGameDesignersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('game_designers', function (Blueprint $table) {
            $table->id();
            
            $table->unsignedBigInteger('game_id');
            $table->unsignedBigInteger('designers_id');

            $table->foreign('game_id')->references('id')->on('games');
            $table->foreign('designers_id')->references('id')->on('designers');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('game_designers');
    }
}
