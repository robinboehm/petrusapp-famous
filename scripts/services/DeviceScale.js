(function () {
  'use strict';

  angular
    .module('petrusApp')
    .factory('DeviceScale', DeviceScale);

  /* @ngInject */
  function DeviceScale() {
    var screenSize = [];
    var virtualSize = [];
    var scale;
    var service = {
      toDevice: toDevice,
      toVirtual: toVirtual,
      setDeviceScreen: setDeviceScreen,
      setVirtualScreen: setVirtualScreen
    };

    return service;

    ////////////////

    function toDevice(value) {
      if (scale) {
        return value * scale;
      }
    }

    function toVirtual(value) {
      if (scale) {
        return value / scale;
      }
    }

    function calculateScale() {
      if (screenSize && virtualSize) {
        scale = screenSize[0] / virtualSize[0];
      }
    }

    function setDeviceScreen(size) {
      screenSize = size;
      calculateScale();
    }

    function setVirtualScreen(size) {
      virtualSize = size;
      calculateScale();
    }
  }
})();