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
                    directories: [
                        'httpWrapper',
                        function (httpWrapper) {
                            return httpWrapper.get('_posts/index.json')
                                .then(function (data) {
                                    return data.directories;
                                });
                        }
                    ],
                    pathTitleMap: [
                        'httpWrapper',
                        function (httpWrapper) {
                            return httpWrapper.get('_posts/config.json')
                                .then(function (data) {
                                    return data.pathTitleMap || {};
                                }, function () {
                                    return {};
                                });
                        }
                    ],
                    navs: [
                        'directories',
                        'pathTitleMap',
                        function (directories, pathTitleMap) {
                            return _.map(directories, function (directory) {
                                return {
                                    path: directory,
                                    title: pathTitleMap[directory] || directory
                                };
                            });
                        }
                    ]
                },
                controller: function ($scope, navs) {
                    $scope.navs = navs;
                }
            });
        }
    ]);