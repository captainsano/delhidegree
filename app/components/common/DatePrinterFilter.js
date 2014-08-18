(function(angular, moment) {

    'use strict';

    /**
     * Filter returns hour for given date string,
     * at 00:00, returns the day+month label
     * @param index - the index, if 0 will return hour
     */
    angular
        .module('dd')
        .filter('dateprinter', [
            function() {
                return function(input, index) {
                    var d = moment(input);
                    if (d.hours() === 0 || index === 0) {
                        return d.format('MMM DD HH:mm');
                    }
                    return d.format('HH:mm');
                };
            }
        ])

}(angular, moment));