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
           '$scope', '$filter', 'ForecastService',
            function($scope, $filter, ForecastService) {
                $scope.list = [];
                $scope.nextDayForecast = null;
                $scope.unit = 'C';

                $scope.$watch('nextDayForecast', function() {
                    if ($scope.nextDayForecast) {
                        console.log('Changed!');
                        var feelsLikeF = ForecastService.getHeatIndex(
                            $filter('tempunit')($scope.nextDayForecast.main.temp, 'F'), $scope.nextDayForecast.main.humidity
                        );

                        // Convert and set value in kelvin
                        $scope.nextDayForecast.feelsLike = Math.round(((feelsLikeF - 32) / 1.8) + 273.15);
                    }
                });

                /**
                 * Method to toggle between Celsius to Fahrenheit
                 */
                $scope.toggleUnit = function() {
                    $scope.unit = ($scope.unit === 'C')?'F':'C';
                };

                ForecastService.getThreeHoursForecast().then(function(data) {
                    $scope.list = data.list;
                    $scope.nextDayForecast = _getNextDayNoonForecast(data.list);
                }, function(error) {
                    console.log(error);
                });
            }
        ]);

}(angular, moment));