<?php

namespace App\Http\Controllers\Vendor;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class VendorController extends Controller
{
    public function index()
    {
        return Inertia::render('Vendor/Dashboard');
    }
}
