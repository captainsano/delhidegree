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
                        console.log('Hammer PanUp Linking...');

                        fn = $parse(attrs['hmPanUp']);
                        hammer = new Hammer($element[0], {
                            threshold: 10
                        });

                        hammer.on('swipeleft', function(event) {
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
                        console.log('Hammer PanDown Linking...');

                        fn = $parse(attrs['hmPanDown']);
                        hammer = new Hammer($element[0], {
                            threshold: 10
                        });

                        hammer.on('swiperight', function(event) {
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