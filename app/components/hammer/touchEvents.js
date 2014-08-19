(function(angular, Hammer) {

    'use strict';

    angular
        .module('hammer')
        .directive('hmSwipeLeft', [
            '$parse',
            function($parse) {
                return {
                    link: function($scope, $element, attrs) {
                        var hammer, fn;
                        console.log('Hammer PanUp Linking...');

                        fn = $parse(attrs['hmSwipeLeft']);
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
        .directive('hmSwipeRight', [
            '$parse',
            function($parse) {
                return {
                    link: function($scope, $element, attrs) {
                        var hammer, fn;
                        console.log('Hammer PanDown Linking...');

                        fn = $parse(attrs['hmSwipeRight']);
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

    angular
        .module('hammer')
        .directive('hmTap', [
            '$parse',
            function($parse) {
                return {
                    link: function($scope, $element, attrs) {
                        var hammer, fn;
                        console.log('Hammer Tap Linking...');

                        fn = $parse(attrs['hmTap']);
                        hammer = new Hammer($element[0], {
                            threshold: 10
                        });

                        hammer.on('tap', function(event) {
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