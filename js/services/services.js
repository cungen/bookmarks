define(['angular'], function() {
    'use strict';

    angular.module('services', [])
        .factory('BookmarkService', [
            '$resource',
            function($resource) {
                return $resource('/data/:bookmark', {bookmark: '@bookmark'}, {});
        }]);
});