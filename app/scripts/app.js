'use strict';

angular.module('angularApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
])
    .config(function ($routeProvider) {
        // home page
        $routeProvider
            .when('/', {
                templateUrl: '/views/home.html',
                controller: 'ViewController'
            })

            .when('/home', {redirectTo:'/'})

            .when('/:path*', {
                templateUrl: function (url) {
                    return '/views/' + url.path + '.html';
                },
                controller: 'ViewController'
            });
    });
