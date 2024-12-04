<?php

use App\Http\Controllers\BrandController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\CheckoutController;
use App\Http\Controllers\MercadoPagoController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\StripePaymentController;
use App\Http\Controllers\TeamController;
use App\Http\Controllers\WishlistController;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return redirect()->route('dashboard');
});

Route::get('/dashboard', [ProductController::class, 'getProductByLaunch'])->name('dashboard');

Route::get('products/{slug}', [ProductController::class, 'getProduct'])
    ->name('product.page');

Route::post('/cart/add', [CartController::class, 'addItem'])->name('cart.add');
Route::post('/cart/addcart', [CartController::class, 'addItemCart'])->name('cart.add.item');
Route::delete('/cart/remove/{itemId}', [CartController::class, 'removeItem'])->name('cart.remove');
Route::get('/cart', [CartController::class, 'showCart'])->name('cart.show');

Route::post('/wishlist/add', [WishlistController::class, 'addItem'])->name('wishlist.add');
Route::delete('/wishlist/remove/{itemId}', [WishlistController::class, 'removeItem'])->name('wishlist.remove');
Route::get('/wishlist', [WishlistController::class, 'showWishlist'])->name('wishlist.show');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/checkout', [OrderController::class, 'checkout'])->name('checkout.show');


Route::post('/process_payment', [OrderController::class, 'store'])->name('order.store');



require __DIR__.'/auth.php';

Route::prefix('admin')->middleware(['auth', 'verified', 'role:admin'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('Admin/Dashboard');
    })->name('admin.dashboard');

    Route::get('orders', function () {
        return Inertia::render('Admin/Orders');
    })->name('admin.orders');

    Route::get('customers', function () {
        return Inertia::render('Admin/Customers');
    })->name('admin.customers');

    Route::get('products', function () {
        return Inertia::render('Admin/Products');
    })->name('admin.products');

    Route::get('analytics', function () {
        return Inertia::render('Admin/Analytics');
    })->name('admin.analytics');

    Route::resource('brand', BrandController::class);

    Route::resource('category', CategoryController::class);

    Route::resource('team', TeamController::class);
    
    Route::resource('product', ProductController::class);
});


Route::prefix('vendor')->middleware(['auth', 'verified', 'role:vendor'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('Vendor/Dashboard');
    })->name('vendor.dashboard');
});
