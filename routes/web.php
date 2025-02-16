<?php

use App\Http\Controllers\AlertController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SensorController;
use App\Http\Controllers\SensorReadingController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::resource('alerts', AlertController::class)
->middleware(['auth', 'verified'])
->only(['index']);

Route::get('alerts-table', [AlertController::class, 'table'])
->middleware(['auth', 'verified'])
->name('alerts.table');

Route::resource('analytics', SensorReadingController::class)
->middleware(['auth', 'verified'])
->only(['index']);

Route::resource('sensors', SensorController::class)
->middleware(['auth', 'verified'])
->only(['index', 'create', 'store']);

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// No CSRF
Route::post('sensor-readings', [SensorReadingController::class, 'store']);
Route::post('alerts', [AlertController::class, 'store']);

require __DIR__.'/auth.php';
