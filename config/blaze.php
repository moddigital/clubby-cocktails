<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Keyboard Shortcut
    |--------------------------------------------------------------------------
    |
    | Which keyboard shortcut should open Blaze's search overlay?
    | ⌘ and X?
    |
    */

    'keyboard_shortcut' => 'Q',

    /*
    |--------------------------------------------------------------------------
    | Searchables
    |--------------------------------------------------------------------------
    |
    | What should Blaze be able to search through?
    | (the order of the searchables will influence the order in the results)
    |
    */

    'searchables' => [
        \DoubleThreeDigital\Blaze\Searchables\StatamicSearch::class,
        \DoubleThreeDigital\Blaze\Searchables\Collection::class,
        \DoubleThreeDigital\Blaze\Searchables\Navigation::class,
        \DoubleThreeDigital\Blaze\Searchables\Taxonomy::class,
        \DoubleThreeDigital\Blaze\Searchables\GlobalSet::class,
        \DoubleThreeDigital\Blaze\Searchables\Form::class,
        \DoubleThreeDigital\Blaze\Searchables\CPNav::class,
        \DoubleThreeDigital\Blaze\Searchables\Blueprint::class,
        \DoubleThreeDigital\Blaze\Searchables\Fieldset::class,
        \DoubleThreeDigital\Blaze\Searchables\Utility::class,
        \DoubleThreeDigital\Blaze\Searchables\UserGroup::class,
        \DoubleThreeDigital\Blaze\Searchables\UserRole::class,
        \DoubleThreeDigital\Blaze\Searchables\Documentation\Documentation::class,
    ],

];
