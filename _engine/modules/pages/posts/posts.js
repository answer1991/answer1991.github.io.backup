/**
 * Created by Joe on 16/5/10.
 */

'use strict';

angular
    .module('answer1991.github.io.pages.posts', [])
    .config([
        '$stateProvider',
        function ($stateProvider) {
            $stateProvider.state('pages.posts', {
                url: '/{path}',
                abstract: true,
                template: '<div ui-view></div>'
            });
        }
    ]);