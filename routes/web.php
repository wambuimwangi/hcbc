<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/



// Navigation bar routes
Route::get('/', 'SiteController@index')->name('index');
Route::get('about-us', 'SiteController@about')->name('about-us');

// Paypal
Route::get('paypal-view', 'SiteController@paypalView')->name('paypal-view');
