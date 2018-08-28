module.exports = angular.module('stf.appium', [])
    .run(['$templateCache', ($templateCache) => {
        $templateCache.put('control-panes/appium/index.pug',
            require('./index.pug')
        )
    }])
    .controller('AppiumCtrl', require('./controller'))
