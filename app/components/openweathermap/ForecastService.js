(function(angular) {

    'use strict';

    // Services provides promise-based methods to obtain data from
    // openweathermaps API.
    angular
        .module('openweathermap')
        .factory('ForecastService', [
            '$q', '$http',
            function($q, $http) {
                var _getThreeHoursForecast, _processTempForNoon, API_ADDR;

                API_ADDR = 'http://api.openweathermap.org/data/2.5/forecast';

                /**
                 * Method fetches 3 hours forecast.
                 * @returns {promise} Refer openweatherdata for API result.
                 */
                _getThreeHoursForecast = function() {
                    var deferred = $q.defer();

                    $http.get(API_ADDR, {
                        params: {
                            q: 'New Delhi,in',
                            mode: 'json'
                        }
                    }).success(function(data, status, header, config) {
                        console.log('Got Response');
                        if (data.cod != '200') {
                            deferred.reject(data);
                        }
                        deferred.resolve(data);
                    }).error(function(data, status, headers, config) {
                        console.log('Error');
                        console.log(data);
                        deferred.reject(data);
                    });

                    return deferred.promise;
                };

                return {
                    getNextAfternoonForecast: _getThreeHoursForecast,
                };
            }
        ]);

}(angular));