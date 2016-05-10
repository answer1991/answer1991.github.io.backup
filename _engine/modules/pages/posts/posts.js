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
    ])
    .factory('postService', [
        function () {
            var fileRegExp = /(\d{4}-\d{2}-\d{2})-(.+)\.(\w*)/;

            var service = {
                formatPost: function (file) {
                    if (fileRegExp.test(file)) {
                        var date = RegExp.$1;
                        var title = RegExp.$2;

                        return {
                            date: new Date(date),
                            title: title,
                            file: file
                        };
                    }
                }
            };

            return service;
        }
    ]);