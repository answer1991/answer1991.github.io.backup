/**
 * Created by Joe on 16/5/10.
 */


'use strict';

angular
    .module('answer1991.github.io.pages.page', [])
    .config([
        '$stateProvider',
        function ($stateProvider) {
            $stateProvider.state('pages.page', {
                url: '/pages/{path}',
                templateUrl: 'modules/pages/page/page.html',
                resolve: {
                    page: function ($stateParams, pageService, pageTitleMap) {
                        return pageService.formatPage($stateParams.path, pageTitleMap);
                    },
                    content: function (httpWrapper, $stateParams) {
                        return httpWrapper.get('_pages/' + $stateParams.path)
                            .then(function (data) {
                                return data;
                            });
                    }
                },
                controller: function ($scope, content, page) {
                    $scope.page = page;
                    $scope.content = content;
                }
            });
        }
    ])
    .factory('pageService', [
        function () {
            var pageFileRegExp = /(.+)\.(\w+)/;

            var service = {
                formatPage: function (file, pathTitleMap) {
                    var fileName = file;
                    if (pageFileRegExp.test(file)) {
                        fileName = RegExp.$1;
                    }

                    return {
                        path: file,
                        title: pathTitleMap[fileName] || fileName
                    };
                }
            };

            return service;
        }
    ]);