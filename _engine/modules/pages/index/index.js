/**
 * Created by Joe on 15/11/24.
 */

'use strict';
angular
    .module('answer1991.github.io.pages.index', [])
    .config([
        '$stateProvider',
        function ($stateProvider) {
            $stateProvider.state('pages.index', {
                url: '/',
                templateUrl: 'modules/pages/index/index.html'
            });
        }
    ]);