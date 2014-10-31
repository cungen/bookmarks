define([
    'angular',
    'filters/filters',
    'services/services',
    'directives/directives',
    'controllers/controllers',
    'uiRouter'
], function(angular, filters, services, directives, controllers) {
    'use strict';

    return angular.module('bookmark', [
        'ui.router',
        'controllers',
        'filters',
        'services',
        'directives'
    ]);
});