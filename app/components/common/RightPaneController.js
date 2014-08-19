(function(angular, moment) {

    'use strict';

    angular
        .module('dd')
        .controller('RightPaneController', [
            '$scope', 'ForecastService',
            function($scope, ForecastService) {
                $scope.storage = ForecastService.storage;

                $scope.isDivider = function(input) {
                    if (moment(input).hour() === 0) {
                        return true;
                    } else {
                        return false;
                    }
                };
            }
        ]);

}(angular, moment));