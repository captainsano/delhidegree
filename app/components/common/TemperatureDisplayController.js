(function(angular) {

    angular
        .module('dd')
        .controller('TemperatureDisplayController', [
           '$scope', 'ForecastService',
            function($scope, ForecastService) {
                $scope.list = [];

                ForecastService.getNextAfternoonForecast().then(function(data) {
                    // Use the index 24 for noon forecast
                    $scope.list = data.list;
                }, function(error) {
                    console.log(error);
                });
            }
        ]);

}(angular));