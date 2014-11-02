define(['angular', 'app'], function(angular, app) {
    'use strict';
    return app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/grid");
        $stateProvider
            .state('grid', {
                url: "/grid",
                templateUrl: "views/grid.html",
                controller: "GridController"
            })
            .state('list', {
                url: "/list",
                templateUrl: "views/list.html",
                controllers: "ListController"
            });
    }]);
});