(function(angular) {

    'use strict';

    angular
        .module('dd')
        .controller('RootController', [
            '$scope',
            function($scope) {
                $scope.bottomPaneVisible = false;

                $scope.showBottomPane = function() {
                    $scope.bottomPaneVisible = true;
                };

                $scope.hideBottomPane = function() {
                    $scope.bottomPaneVisible = false;
                };
            }
        ]);

}(angular));