(function(angular) {

    angular
        .module('dd')
        .controller('TemperatureDisplayController', [
           '$scope', 'ForecastService',
            function($scope, ForecastService) {
                ForecastService.getNextAfternoonForecast().then(function(result) {
                    console.log(result);
                }, function(error) {
                    console.log(error);
                });
            }
        ]);

}(angular));