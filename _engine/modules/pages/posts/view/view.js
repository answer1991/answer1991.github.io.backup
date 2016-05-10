/**
 * Created by Joe on 16/5/10.
 */
'use strict';

angular
    .module('answer1991.github.io.pages.posts')
    .config([
        '$stateProvider',
        function ($stateProvider) {
            $stateProvider.state('pages.posts.view', {
                url: '/view/{file}',
                templateUrl: 'modules/pages/posts/view/view.html',
                resolve: {
                    post: [
                        '$stateParams',
                        'postService',
                        function ($stateParams, postService) {
                            return postService.formatPost($stateParams.file);
                        }
                    ],
                    content: [
                        'httpWrapper',
                        '$stateParams',
                        function (httpWrapper, $stateParams) {
                            return httpWrapper.get('_posts/' + $stateParams.path + '/' + $stateParams.file)
                                .then(function (data) {
                                    return data;
                                });
                        }
                    ]
                },
                controller: [
                    '$scope',
                    'post',
                    'content',
                    function ($scope, post, content) {
                        $scope.post = post;
                        $scope.content = content;
                    }
                ]
            });
        }
    ]);