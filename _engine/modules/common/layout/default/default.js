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
                    ],
                    pageTitleMap: [
                        'httpWrapper',
                        function (httpWrapper) {
                            return httpWrapper.get('_pages/config.json')
                                .then(function (data) {
                                    return data.pathTitleMap || {};
                                }, function () {
                                    return {};
                                });
                        }
                    ],
                    pages: [
                        'httpWrapper',
                        'pageTitleMap',
                        'pageService',
                        function (httpWrapper, pageTitleMap, pageService) {
                            return httpWrapper.get('_pages/index.json')
                                .then(function (data) {
                                    return data.files;
                                }, function () {
                                    return [];
                                })
                                .then(function (files) {
                                    return _.map(files, function (file) {
                                        return pageService.formatPage(file, pageTitleMap);
                                    });
                                });
                        }
                    ]
                },
                controller: function ($scope, navs, pages) {
                    $scope.navs = navs;
                    $scope.pages = pages;
                }
            });
        }
    ]);