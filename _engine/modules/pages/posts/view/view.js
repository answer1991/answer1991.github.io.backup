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
                    file: [
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
                    'file',
                    function ($scope, file) {
                        $scope.file = file;
                    }
                ]
            });
        }
    ]);