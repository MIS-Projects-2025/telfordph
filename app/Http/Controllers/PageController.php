<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Inertia\Inertia;

class PageController extends Controller
{
    public function home()
    {

        $folder = public_path('images/client-logos');
        $files = File::files($folder);

        $imagePaths = collect($files)->map(function ($file) use ($folder) {
            // Get relative path from /public
            return 'images/client-logos/' . $file->getFilename();
        });

        return Inertia::render('Home/Index', [
            'images' => $imagePaths,
        ]);
    }

    public function aboutUs()
    {
        return Inertia::render('AboutUs/Index');
    }
}
