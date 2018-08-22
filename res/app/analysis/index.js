module.exports = angular.module('ui-analysis', [])
    .config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/analysis', {
        template: require('./index.pug')
      })
    }])
