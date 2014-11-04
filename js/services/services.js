define(['angular'], function() {
    'use strict';

    angular.module('services', [])
        .factory('BookmarkService', [
            '$http',
            function($http) {
                return {
                    get: function() {
                        $http.get('data/bookmark.json');
                    }
                }
        }]);
});