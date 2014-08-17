(function(angular) {

    'use strict';

    // Filter converts Kelvin to
    angular.module('dd').filter('tempunit', function() {
        var _unitFilter;

        /**
         * Filter to format input temp in Kelvin scale to Celsius or Fahrenheight
         * @param input (The input, in Kelvin Scale)
         * @param unit (The required output unit: 'C' Celsius or 'F' Fahrenheit
         * @return Returns rounded off temp in C/F
         */
        _unitFilter = function(input, unit) {
            input = parseFloat(input);
            switch(unit) {
                case 'C':
                case 'c': return Math.round(input - 273.15);
                case 'F':
                case 'f': return Math.round(1.8 * (input - 273.15) + 32);
            }
            return 0;
        };

        return _unitFilter;
    });

}(angular));