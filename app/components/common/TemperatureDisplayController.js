(function(angular, moment) {

    'use strict';

    /**
     * Method takes the forecast list and returns the next day's forecast.
     * @param list
     * @private
     */
    var _getNextDayNoonForecast = function(list) {
        var i, tomorrow;

        tomorrow = moment().add(1, 'days');
        console.log('Tomorrow: ' + tomorrow.date());

        for (i = list.length - 1; i >= 0; i--) {
            // If given time is of next day and 12 PM return it
            var givenDate = moment(list[i].dt_txt); // Parse the date text and obtain date
            if (tomorrow.date() === givenDate.date() && givenDate.hour() === 12) {
                return list[i];
            }
        }

        return null;
    };

    angular
        .module('dd')
        .controller('TemperatureDisplayController', [
           '$scope', 'ForecastService',
            function($scope, ForecastService) {
                $scope.list = [];
                $scope.nextDayForecast = null;
                $scope.unit = 'C';

                ForecastService.getThreeHoursForecast().then(function(data) {
                    $scope.list = data.list;
                    $scope.nextDayForecast = _getNextDayNoonForecast(data.list);
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

}(angular, moment));