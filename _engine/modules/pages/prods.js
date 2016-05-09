/**
 * Created by Joe on 15/10/15.
 */

'use strict';

angular
    .module('answer1991.github.io.pages', [
        'answer1991.github.io.pages.index'
    ])
    .config([
        '$stateProvider',
        function ($stateProvider) {
            $stateProvider.state('pages', {
                parent: 'layout.default',
                template: '<div ui-view></div>'
            });
        }
    ]);