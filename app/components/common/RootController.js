(function(angular) {

    'use strict';

    angular
        .module('dd')
        .controller('RootController', [
            '$scope',
            function($scope) {
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
            }
        ]);

}(angular));