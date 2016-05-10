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
                        'postService',
                        function (httpWrapper, $stateParams, postService) {
                            return httpWrapper.get('_posts/' + $stateParams.path + '/index.json')
                                .then(function (data) {
                                    return data.files;
                                })
                                .then(function (files) {
                                    var posts = _.compact(
                                        _.map(files, function (file) {
                                            return postService.formatPost(file);
                                        })
                                    );

                                    posts.sort(function (post1, post2) {
                                        return post2.date.getTime() - post1.date.getTime();
                                    });

                                    return posts;
                                });
                        }
                    ],
                    title: [
                        'pathTitleMap',
                        '$stateParams',
                        function (pathTitleMap, $stateParams) {
                            return pathTitleMap[$stateParams.path] || $stateParams.path;
                        }
                    ]
                },
                controller: [
                    '$scope',
                    'posts',
                    'title',
                    function ($scope, posts, title) {
                        $scope.title = title;
                        $scope.posts = posts;
                    }
                ]
            });
        }
    ]);