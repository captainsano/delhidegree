(function(angular) {

    'use strict';

    // Services provides promise-based methods to obtain data from
    // openweathermaps API.
    angular
        .module('openweathermap')
        .factory('ForecastService', [
            '$q', '$http',
            function($q, $http) {
                var _getThreeHoursForecast, _getHeatIndex, API_ADDR;

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
                        console.log(data);
                        deferred.resolve(data);
                    }).error(function(data, status, headers, config) {
                        console.log('Error');
                        console.log(data);
                        deferred.reject(data);
                    });

                    return deferred.promise;
                };

                /**
                 * Method returns the "Feels Like" temperature in fahrenheit.
                 * Source: http://www.hpc.ncep.noaa.gov/html/heatindex_equation.shtml
                 * @param T temperature in fahrenheit
                 * @param RH relative humidity %
                 * @returns {number} Heat index in fahrenheit.
                 * @private
                 */
                _getHeatIndex = function(T, RH) {
                    var HI, T_2, RH_2;

                    // Compute HI using simple avg formula first and if > 80 use regression
                    HI = 0.5 * (T + 61.0 + ((T - 68.0) * 1.2) + (RH * 0.094));
                    if ((HI + T) * 0.5 <= 80) {
                        return HI;
                    }

                    T_2 = T * T;
                    RH_2 = RH * RH;

                    HI = -42.379 + (2.04901523 * T) + (10.14333127 * RH)
                        - (.22475541 * T * RH) - (.00683783 * T_2)
                        - (.05481717 * RH_2) + (.00122874 * T_2 * RH)
                        + (.00085282 * T * RH_2) - (.00000199* T_2 * RH_2);

                    if (RH < 13 && T > 80 && T < 112) {
                        HI -= ((13 - RH) / 4) * Math.sqrt((17 - Math.abs(T - 95.0))/17);
                    } else if (RH > 85 && T > 80 && T < 87) {
                        HI += ((RH - 85) / 10) * ((87 - T) / 5);
                    }


                    return HI;
                };

                return {
                    getThreeHoursForecast: _getThreeHoursForecast,
                    getHeatIndex: _getHeatIndex
                };
            }
        ]);

}(angular));