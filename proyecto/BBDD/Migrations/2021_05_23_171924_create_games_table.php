<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGamesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('games', function (Blueprint $table) {
            $table->integer('id_games')->primary();
            $table->string('games_name')->nullable();
            $table->integer('games_price')->nullable();
            $table->string('games_des')->nullable();
            $table->date('games_time')->nullable();
            $table->unsignedInteger('store_id_store');
            $table->unsignedInteger('developers_id_developer');
            $table->unsignedInteger('products_product_id');
            $table->unsignedInteger('users_id_user');
            $table->unsignedInteger('comments_id_comment');
            // $table->unsignedInteger('comments_id_author');

            $table->foreign('store_id_store')->references('id_store')->on('store');
            $table->foreign('developers_id_developer')->references('id_developers')->on('developers');
            $table->foreign('products_product_id')->references('product_id')->on('products');
            $table->foreign('users_id_user')->references('id_user')->on('users');
            $table->foreign('comments_id_comment')->references('id_comment')->on('comments');
            // $table->foreign('comments_id_author')->references('id_author')->on('author');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('games');
    }
}
