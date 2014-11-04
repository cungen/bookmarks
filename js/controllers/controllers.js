define(['angular', '../services/services'], function(angular) {
    'use strict';

    return angular.module('controllers', ['services'])

        .controller('GridController', [
            '$scope',
            '$http',
            function($scope, $http) {
                $http.get('../data/bookmark.json')
                    .success(function(data) {
                        $scope.bookmark = data;
                        $scope.currentCate = data;
                    });
                $scope.changeCate = function(pcate, cate) {
                    $scope.currentCate = $scope.currentCate[pcate][cate];
                }
        }])

        .controller('ListController', [
            '$scope',
            '$injector',
            function($scope, $injector) {
            require(['controllers/myctrl2'], function(myctrl2) {
                $injector.invoke(myctrl2, this, {'$scope': $scope});
            })
        }]);
});