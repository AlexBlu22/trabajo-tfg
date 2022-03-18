<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id_user');
            $table->string('username')->nullable();
            $table->string('user_password')->nullable();
            $table->string('user_email')->nullable();
            $table->unsignedInteger('user_email_verify')->nullable();
            $table->string('user_address')->nullable();
            $table->enum('subscription_type',['bronze', 'silver', 'gold']);
            $table->integer('store_id_store');
            $table->unsignedInteger('id_game');

            $table->foreign('store_id_store')->references('id_user')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
