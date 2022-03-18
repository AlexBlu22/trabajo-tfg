<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->increments('order_id');
            $table->unsignedInteger('product_id');
            $table->unsignedInteger('id_user');
            $table->unsignedInteger('number_products')->nullable();
            $table->double('total_price')->nullable();
            $table->double('discount')->nullable()->unsigned();

            $table->foreign('product_id')->references('order_id')->on('orders');
            $table->foreign('id_user')->references('order_id')->on('orders');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('orders');
    }
}
