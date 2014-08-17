(function(angular) {

    angular
        .module('dd')
        .controller('TemperatureDisplayController', [
           '$scope', 'ForecastService',
            function($scope, ForecastService) {
                $scope.list = [];
                $scope.unit = 'C';

                ForecastService.getNextAfternoonForecast().then(function(data) {
                    // Use the index 24 for noon forecast
                    $scope.list = data.list;
                }, function(error) {
                    console.log(error);
                });

                /**
                 * Method to toggle between Celsius to Fahrenheit
                 */
                $scope.toggleUnit = function() {
                    $scope.unit = ($scope.unit === 'C')?'F':'C';
                };
            }
        ]);

}(angular));