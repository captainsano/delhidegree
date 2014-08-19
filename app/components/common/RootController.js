(function(angular) {

    'use strict';

    angular
        .module('dd')
        .controller('RootController', [
            '$scope', '$rootScope',
            function($scope, $rootScope) {
                $scope.rightPaneVisible = false;

                $scope.showRightPane = function() {
                    $scope.rightPaneVisible = true;
                };

                $scope.hideRightPane = function() {
                    $scope.rightPaneVisible = false;
                };

                $scope.toggleRightPane = function() {
                    $scope.rightPaneVisible = !$scope.rightPaneVisible;
                };

                /**
                 * Method to toggle between Celsius to Fahrenheit
                 */
                $scope.toggleUnit = function() {
                    $rootScope.unit = ($rootScope.unit === 'C')?'F':'C';
                };
            }
        ]);

}(angular));