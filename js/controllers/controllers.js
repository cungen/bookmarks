define(['angular', '../services/services'], function(angular) {
    'use strict';

    return angular.module('controllers', ['services'])
        .controller('MyCtrl1', ['$scope', 'version', function($scope, version) {
            $scope.scopedAppVersion = version;
        }])
        .controller('MyCtrl2', ['$scope', '$injector', function($scope, $injector) {
            require(['controllers/myctrl2'], function(myctrl2) {
                $injector.invoke(myctrl2, this, {'$scope': $scope});
            })
        }]);
});