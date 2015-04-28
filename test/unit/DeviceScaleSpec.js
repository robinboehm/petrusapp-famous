'use strict';

/* jasmine specs for controllers go here */
describe('DeviceScale', function () {
    var DeviceScale;

    beforeEach(module('petrusApp'));
    beforeEach(inject(function(_DeviceScale_){
        DeviceScale = _DeviceScale_;
    }));

    it("should exist", function () {
        expect(DeviceScale).toBeDefined();
    });

    describe("setDeviceScreen", function () {
        it("should exist and be a function", function () {
            expect(DeviceScale.setDeviceScreen).toBeDefined();
            expect(angular.isFunction( DeviceScale.setDeviceScreen)).toBe(true);
        });
    });

    describe("setVirtualScreen", function () {
        it("should exist and be a function", function () {
            expect(DeviceScale.setVirtualScreen).toBeDefined();
            expect(angular.isFunction( DeviceScale.setVirtualScreen)).toBe(true);
        });
    });

    describe("toDevice with same aspect ratio", function () {
        beforeEach(function () {
            DeviceScale.setDeviceScreen([1000, 1000]);
            DeviceScale.setVirtualScreen([500, 500]);
        });

        it("should exist and be a function", function () {
            expect(DeviceScale.toDevice).toBeDefined();
            expect(angular.isFunction( DeviceScale.toDevice)).toBe(true);
        });


        it("should scale a number", function () {
            var result;

            result = DeviceScale.toDevice(500);
            expect(result).toBe(1000);

            result = DeviceScale.toDevice(1);
            expect(result).toBe(2);

            result = DeviceScale.toDevice(0);
            expect(result).toBe(0);

            result = DeviceScale.toDevice(274);
            expect(result).toBe(548);

            result = DeviceScale.toDevice(900);
            expect(result).toBe(1800);
        });
    });

    describe("toDevice with different aspect ratio", function () {
        beforeEach(function () {
            DeviceScale.setDeviceScreen([375, 667]);
            DeviceScale.setVirtualScreen([320, 568]);
        });

        it("should scale numbers with 1.171875 ", function () {
            var result;

            result = DeviceScale.toDevice(320);
            expect(result).toBe(375);


            // scale depending on width is 375 / 320 -> * 568 so we loose 2 vertical pixels
            result = DeviceScale.toDevice(568);
            expect(result).toBe(665.625);
        });
    });
    describe("toVirtual with same aspect ratio", function () {
        beforeEach(function () {
            DeviceScale.setDeviceScreen([1000, 1000]);
            DeviceScale.setVirtualScreen([500, 500]);
        });

        it("should exist and be a function", function () {
            expect(DeviceScale.toVirtual).toBeDefined();
            expect(angular.isFunction( DeviceScale.toVirtual)).toBe(true);
        });


        it("should scale a number", function () {
            var result;

            result = DeviceScale.toVirtual(1000);
            expect(result).toBe(500);

            result = DeviceScale.toVirtual(2);
            expect(result).toBe(1);

            result = DeviceScale.toVirtual(0);
            expect(result).toBe(0);

            result = DeviceScale.toVirtual(548);
            expect(result).toBe(274);

            result = DeviceScale.toVirtual(1800);
            expect(result).toBe(900);
        });
    });

    describe("toDevice with different aspect ratio", function () {
        beforeEach(function () {
            DeviceScale.setDeviceScreen([375, 667]);
            DeviceScale.setVirtualScreen([320, 568]);
        });

        it("should scale numbers with 1.171875 ", function () {
            var result;

            result = DeviceScale.toVirtual(375);
            expect(result).toBe(320);

            // scale depending on width is 375 / 320 -> * 568 so we loose 2 vertical pixels
            result = DeviceScale.toVirtual(665.625);
            expect(result).toBe(568);
        });
    });
});

