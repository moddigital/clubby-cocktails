<?php

use App\Http\Controllers\DynamicToken;
use Illuminate\Support\Facades\Route;
use Statamic\Facades\Site;

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

// Redirects..
Route::redirect('/amarettosour', '/cocktails/amaretto-sour', 301);
Route::redirect('/pornstarmartini', '/cocktails/pornstar-martini', 301);
Route::redirect('/strawberrydaiquiri', '/cocktails/strawberry-daiquiri', 301);
Route::redirect('/espressomartini', '/cocktails/espresso-martini', 301);
Route::redirect('/classicmojito', '/cocktails/classic-mojito', 301);

// Dynamic Token route for posting a form with Ajax.
Route::get('/!/DynamicToken/refresh', [DynamicToken::class, 'getRefresh']);

// The Sitemap route to the sitemap.xml
Route::statamic('/sitemap.xml', 'sitemap/sitemap', [
    'layout' => null,
    'content_type' => 'application/xml'
]);

// The Manifest route to the manifest.json
Route::statamic('/site.webmanifest', 'manifest/manifest', [
    'layout' => null,
    'content_type' => 'application/json'
]);

// The Search route to display search results with `views/search.antlers.html`.
Route::statamic('/search', 'search', [
    'title' => 'Search results'
]);
