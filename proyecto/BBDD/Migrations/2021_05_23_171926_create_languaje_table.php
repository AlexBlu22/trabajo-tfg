<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLanguajeTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('languaje', function (Blueprint $table) {
            $table->integer('id_languaje')->primary();
            $table->char('languaje_name')->nullable();
            $table->integer('games_id_games');

            $table->foreign('games_id_games')->references('id_games')->on('games');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('languaje');
    }
}
