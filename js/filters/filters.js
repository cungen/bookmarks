define([
    'angular',
    '../services/services'
], function(angular, services) {
    'use strict';
    angular.module('filters', ['services'])
        .filter('interpolate', ['version', function(version) {
            return function(text) {
                return String(text).replace(/\%VERSION\%/mg, version);
            }
        }]);
});