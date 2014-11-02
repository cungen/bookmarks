define(['angular', '../services/services'], function(angular) {
    'use strict';

    return angular.module('controllers', ['services'])

        .controller('GridController', [
            '$scope',
            'BookmarkService',
            function($scope, BookmarkService) {
                BookmarkService.get({bookmark: 'bookmark.json'}, function(data) {
                    $scope.bookmark = data;
                }, function(err) {
                    console.log(err);
                });
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