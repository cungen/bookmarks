define(['angular', '../services/services'], function(angular, services) {
    'use strict';

    angular.module('directives', ['services'])
        .directive('appVersion', ['version', function(version) {
            return function(scope, elem, attrs) {
                elem.text(version);
            };
        }]);
});