<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePaymentcardsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('paymentcards', function (Blueprint $table) {
            $table->id();

            $table->integer('paymentcard_number');
            $table->String('paymentcard_headline');
            $table->date('paymentcard_expiration_date');
            $table->String('paymentcard_type');
            $table->integer('paymentcard_cvc');
            $table->unsignedBigInteger('user_id')->nullable();

            $table->foreign('user_id')->references('id')->on('users');

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
        Schema::dropIfExists('paymentcards');
    }
}
