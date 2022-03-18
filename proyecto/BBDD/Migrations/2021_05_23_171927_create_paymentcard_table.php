<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePaymentcardTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('paymentcard', function (Blueprint $table) {
            $table->integer('id_paymentcard')->primary();
            $table->integer('paymentcard_number')->nullable();
            $table->string('paymentcard_headline')->nullable();
            $table->date('paymentcard_expiration')->nullable();
            $table->string('paymentcard_type')->nullable();
            $table->integer('payment_cvc')->nullable();
            $table->unsignedInteger('users_id_user');

            $table->foreign('users_id_user')->references('id_user')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('paymentcard');
    }
}
