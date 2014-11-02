define([
    'angular',
    'filters/filters',
    'services/services',
    'directives/directives',
    'controllers/controllers',
    'uiRouter',
    'angularResource'
], function(angular, filters, services, directives, controllers) {
    'use strict';

    return angular.module('bookmark', [
        'ui.router',
        'ngResource',
        'controllers',
        'filters',
        'services',
        'directives'
    ]);
});