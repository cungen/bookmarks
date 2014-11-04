require.config({
    baseUrl: "js",
    paths: {
        jquery: "../bower_components/jquery/dist/jquery.min",
        angular: "../bower_components/angular/angular.min",
        uiRouter: "../bower_components/angular-ui-router/release/angular-ui-router.min",
        bootstrap: '../bower_components/bootstrap/dist/js/bootstrap.min',
        APIService: 'services/APIService'
    },
    shim: {
        "angular": {"exports": "angular"},
        "uiRouter": {
            deps: ["angular"],
            "export": "uiRouter"
        },
        "bootstrap": {
            deps: ["jquery"],
            "exports": "bootstrap"
        }
    },
    priority: [
        "angular"
    ],
    urlArgs: "bust=" + (new Date()).getTime()
});

window.name = "NG_DEFER_BOOTSTRAP!";

require([
    'angular',
    'app',
    'routers',
    'bootstrap'
], function(angular, app) {
    'use strict';
    angular.element().ready(function() {
        angular.resumeBootstrap([app['name']]);
    });
});