<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateArticlesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('articles', function (Blueprint $table) {
            $table->increments('article_id');
            $table->string('article_title')->nullable();
            $table->string('article_author')->nullable();
            $table->date('publication_date')->nullable();
            $table->unsignedInteger('number_views')->nullable();
            $table->unsignedInteger('number_likes')->nullable();
            $table->unsignedInteger('id_comment');
            $table->unsignedInteger('comments_id_comment');
            $table->unsignedInteger('comments_id_author');
            $table->unsignedInteger('author_id');


            $table->foreign('comments_id_comment')->references('id_comment')->on('comments');
            $table->foreign('comments_id_author')->references('id_author')->on('comments');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('articles');
    }
}
