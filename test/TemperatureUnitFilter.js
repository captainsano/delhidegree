describe('Temperature Unit Filter Test', function() {
    'use strict';

    var $filter, TempUnitFilter;

    beforeEach(function() {
        module('dd');

        inject(['$filter',function(_$filter_) {
            $filter = _$filter_;
            TempUnitFilter = $filter('tempunit');
        }]);
    });

    it('Should convert 0K to C', function() {
        expect(TempUnitFilter(0, 'C')).toBe(-273);
    });

    it('Should convert 100K to C', function() {
        expect(TempUnitFilter(100, 'C')).toBe(-173);
    });

    it('Should convert 0K to F', function() {
        expect(TempUnitFilter(0, 'F')).toBe(-460);
    });

    it('Should convert 100K to F', function() {
        expect(TempUnitFilter(100, 'F')).toBe(-280);
    });

});