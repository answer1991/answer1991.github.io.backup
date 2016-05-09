/**
 * Created by Joe on 15/12/2.
 */

'use strict';

angular
    .module('answer1991.github.io.core.remote', [])
    .provider('httpWrapper',
        function () {
            var baseUrl = '';
            //var baseUrl='http://10.210.209.31:8889';

            this.setUrl = function (url) {
                baseUrl = url;
            };

            this.$get = [
                '$http',
                '$q',
                function ($http, $q) {
                    return {
                        getBaseUrl: function () {
                            return baseUrl;
                        },
                        // 查询某个配置
                        get: function (url, params) {
                            return $http({
                                method: 'GET',
                                url: baseUrl + url,
                                params: params
                            }).then(function (data) {
                                return data.data;
                            }, function (data) {

                                if (data.data) {
                                    return $q.reject(data.data);
                                }


                                return $q.reject('query error, url: ' + url + ', status code : ' + data.status);
                            });
                        },
                        // 新增一个配置
                        post: function (url, params, data) {
                            return $http({
                                method: 'POST',
                                url: baseUrl + url,
                                data: data,
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                params: params
                            }).then(function (data) {
                                return data.data;
                            }, function (data) {
                                if (data.data) {
                                    return $q.reject(data.data);
                                }

                                return $q.reject('post error, url: ' + url + ', status code : ' + data.status);
                            });
                        }
                    };
                }
            ];
        }
    );