module.exports = angular.module('stf.appium-service', [
    require('stf/filter-string').name,
    require('stf/socket').name
])
    .factory('LogcatService', require('./logcat-service'))
