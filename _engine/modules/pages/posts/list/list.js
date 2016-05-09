/**
 * Created by Joe on 16/5/10.
 */


'use strict';

angular
    .module('answer1991.github.io.pages.posts')
    .config([
        '$stateProvider',
        function ($stateProvider) {
            $stateProvider.state('pages.posts.list', {
                url: '/list',
                templateUrl: 'modules/pages/posts/list/list.html',
                resolve: {
                    posts: [
                        'httpWrapper',
                        '$stateParams',
                        function (httpWrapper, $stateParams) {
                            return httpWrapper.get('_posts/' + $stateParams.path + '/index.json')
                                .then(function (data) {
                                    return data.files;
                                })
                                .then(function (files) {
                                    return files;
                                });
                        }
                    ]
                },
                controller: [
                    '$scope',
                    'posts',
                    function ($scope, posts) {
                        $scope.posts = posts;
                    }
                ]
            });
        }
    ]);