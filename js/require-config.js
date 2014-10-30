var require = {
    baseUrl: 'js',
    paths: {
        'angular': 'http://cdn.bootcss.com/angular.js/1.3.0-beta.8/angular',
        'controllers': 'js/controllers/controllers',
        'service': 'services',
        'filter': 'filters'
    },
    waitSeconds: 15,
    shim: {
        'controllers': {
            deps: ['angular']
        }
    }
};

define(['controllers'], function(controllers) {
    controllers.controller('BookmarkController', [
        '$scope',
        function($scope) {
            alert(111);
        }
    ]);
});