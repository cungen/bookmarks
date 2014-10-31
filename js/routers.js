define(['angular', 'app'], function(angular, app) {
    'use strict';
    return app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/view1");
        $stateProvider
            .state('view1', {
                url: "/view1",
                templateUrl: "views/grid.html",
                controllers: function() {
                    console.log(111);
                }
            })
            .state('view2', {
                url: "/view2",
                templateUrl: "views/list.html",
                controllers: "MyCtrl2"
            });
    }]);
});