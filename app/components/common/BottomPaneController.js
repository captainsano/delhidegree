(function(angular) {

    angular
        .module('dd')
        .controller('BottomPaneController', [
            '$scope', 'ForecastService',
            function($scope, ForecastService) {
                $scope.storage = ForecastService.storage;
            }
        ])

}(angular));