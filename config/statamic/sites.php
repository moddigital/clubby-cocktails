<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Sites
    |--------------------------------------------------------------------------
    |
    | Each site should have root URL that is either relative or absolute. Sites
    | are typically used for localization (eg. English/French) but may also
    | be used for related content (eg. different franchise locations).
    |
    */

    'sites' => [

        'global' => [
            'name' => 'Global',
            'locale' => 'en_US',
            'url' => '/',
        ],

        'dutch' => [
            'name' => 'Dutch',
            'locale' => 'nl_NL',
            'url' => '/nl/',
        ],

        'german' => [
            'name' => 'German',
            'locale' => 'de_DE',
            'url' => '/de/',
        ],

    ],
];
