/**
 * Created by Joe on 15/10/14.
 */
'use strict';

angular
    .module('answer1991.github.io', [
        'ngAnimate',
        'ngAria',
        'ngCookies',
        'ngMessages',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'ui.router',
        'ngMarkdown',
        'answer1991.github.io.common',
        'answer1991.github.io.pages',
        'answer1991.github.io.tpls'
    ])
    .config(['$urlRouterProvider', function ($urlRouterProvider) {
        $urlRouterProvider.when('', '/');
        $urlRouterProvider.when('/', '/');
    }]);