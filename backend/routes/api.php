<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CompanyController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Show all companies
// Filter by page, pagesize and name
Route::get('/companies', [CompanyController::class, 'index']);

// Store New Company
Route::post('/companies', [CompanyController::class, 'store']);

// Get Company by id
Route::get('/companies/{id}', [CompanyController::class, 'show']);

// Update Existing Company
Route::post('/company/update', [CompanyController::class, 'update']);

// Delete Existing Company
Route::post('/company/delete/{id}', [CompanyController::class, 'destroy']);
