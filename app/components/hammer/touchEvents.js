(function(angular, Hammer) {

    'use strict';

    angular
        .module('hammer')
        .directive('hmPanUp', [
            '$parse',
            function($parse) {
                return {
                    link: function($scope, $element, attrs) {
                        var hammer, fn;

                        fn = $parse(attrs['hmPanUp']);
                        hammer = new Hammer($element[0]);

                        hammer.on('panup', function(event) {
                            $scope.$apply(function() {
                                event.preventDefault();
                                fn($scope, {$event:event});
                            });
                        });
                    }
                };
            }
        ]);

    angular
        .module('hammer')
        .directive('hmPanDown', [
            '$parse',
            function($parse) {
                return {
                    link: function($scope, $element, attrs) {
                        var hammer, fn;

                        fn = $parse(attrs['hmPanDown']);
                        hammer = new Hammer($element[0]);

                        hammer.on('pandown', function(event) {
                            $scope.$apply(function() {
                                event.preventDefault();
                                fn($scope, {$event:event});
                            });
                        });
                    }
                };
            }
        ]);

}(angular, Hammer));