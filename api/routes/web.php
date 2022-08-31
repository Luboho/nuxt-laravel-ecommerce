<?php

use App\Http\Controllers\CookieController;
use App\Http\Controllers\FirstEnterController;
use App\Http\Controllers\UserSystemInfoController;
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
Route::get('getusersysteminfo', [UserSystemInfoController::class, 'getusersysteminfo']);
Route::get('/cookie/set', [CookieController::class, 'setCookie']);
Route::get('/cookie/get', [CookieController::class, 'getCookie']);
Route::get('/firstenter', [FirstEnterController::class, 'firstEnter']);


Route::get('/', function () {
    return view('welcome');
});
