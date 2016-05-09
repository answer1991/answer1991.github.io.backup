/**
 * Created by Joe on 15/10/15.
 */


'use strict';

angular.module('answer1991.github.io.common.layout.default', [])
    .config([
        '$stateProvider',
        function ($stateProvider) {
            $stateProvider.state('layout.default', {
                abstract: true,
                templateUrl: 'modules/common/layout/default/default.html',
                resolve: {
                    navs: [
                        function () {
                            
                        }
                    ]
                },
                controller: function () {
                }
            });
        }
    ]);