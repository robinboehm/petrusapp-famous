'use strict';

angular.module('petrusApp')
  .controller('WishCtrl', function ($scope, weatherService, DeviceScale) {
    var minHeight;
    var maxHeight;
    var step;
    var temperatureOffset;

    $scope.transDiscX = DeviceScale.toDevice(10);
    $scope.transDiscY = DeviceScale.toDevice(55);
    $scope.sizeDisc = DeviceScale.toDevice(210);


    $scope.transPushX = DeviceScale.toDevice(240);
    $scope.transPushY = DeviceScale.toDevice(170);

    $scope.sizePush = DeviceScale.toDevice(80);
    $scope.transMarkerAreaX = DeviceScale.toDevice(130);
    $scope.transMarkerAreaY = DeviceScale.toDevice(160);
    $scope.widthMarkerArea = DeviceScale.toDevice(50);

    $scope.heightMarkerArea = DeviceScale.toDevice(180);
    $scope.widthMarker = DeviceScale.toDevice(25);


    $scope.heightMarker = DeviceScale.toDevice(3);

    weatherService.data.temperature = 20;
    $scope.scaledTemperature = scaleTemperature(weatherService.data.temperature);

    minHeight = 140;
    maxHeight = 340;
    temperatureOffset = 45;

    step = (maxHeight - minHeight) / 100;

    $scope.handleTouch = function (event) {
      var touch;
      var currentY;

      if (event && event.changedTouches && event.changedTouches[0]) {
        touch = event.changedTouches[0];
      }

      // scale the device touch coord back to virtual coords
      currentY = DeviceScale.toVirtual(touch.clientY);
      if (currentY < maxHeight && currentY > minHeight) {
        $scope.weather.temperature = ((maxHeight - currentY) / step) - temperatureOffset;

        // round the temperature to 0.5 steps
        $scope.weather.temperature = Math.round($scope.weather.temperature * 2.0) / 2.0;

        $scope.scaledTemperature = scaleTemperature($scope.weather.temperature);
      }
    };

    function scaleTemperature(temperature) {
      return DeviceScale.toDevice(-temperature * 1.8 + 51 * 1.8)
    }
  });