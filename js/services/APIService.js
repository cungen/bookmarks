define('APIService', ['angular'], function() {
    angular.module('services')
        .factory('APIService', [
            '$http',
            function($http) {
                function _call(method, route, params, slicent) {
                    var options = {
                        method: method,
                        url: URL + route,
                        cache: false,
                        timeout: 20000
                    };
                    if (method == 'GET') {
                        options.params = params;
                    } else {
                        options.data = params;
                    }
                    var http = $http(options);
                    http.catch(function() {
                        if (!slicent) {
                            console.log('%cloading error', "color:red");
                        }
                    });
                    return http;
                }

                return {
                    get: function(route, params, slicent) {
                        return _call('GET', route, params || {}, slicent || true);
                    },

                    post: function(route, params, slicent) {
                        return _call('POST', route, params || {}, slicent || true);
                    },

                    put: function(route, params, slicent) {
                        return _call('PUT', route, params || {}, slicent || true);
                    },

                    del: function(route, params, slicent) {
                        return _call('DELETE', route, params || {}, slicent || true);
                    }
                }
            }
        ])
});