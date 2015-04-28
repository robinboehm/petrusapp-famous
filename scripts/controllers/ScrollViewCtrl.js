"use strict";


angular.module('petrusApp')
  .controller('ScrollViewCtrl', function ($scope, $famous, weatherService, $window, DeviceScale) {


    $scope.reload = function () {
      $window.location.reload();
    };

    $scope.activeViews = {
      listView: false
    };

    $window.$famous = $famous;

    $scope.weather = weatherService.data;
    $scope.result = {
      data: []
    };


    $scope.getWeatherFor = function (weather) {
      var resultArray = $scope.result.data.filter(function (element) {
        return element.weather == weather;
      });

      var returnValue = 0;
      if (resultArray.length > 0) {
        returnValue = resultArray[0].count;
      }
      return returnValue;
    };

    var EventHandler = $famous['famous/core/EventHandler'];
    var Transitionable = $famous['famous/transitions/Transitionable'];
    var Engine = $famous['famous/core/Engine'];
    $scope.enginePipe = new EventHandler();
    Engine.pipe($scope.enginePipe);

    DeviceScale.setDeviceScreen([$window.screen.width, $window.screen.height]);
    DeviceScale.setVirtualScreen([320, 568]);

    $scope.width = DeviceScale.toDevice(320);
    $scope.height = DeviceScale.toDevice(568);

    console.log($scope.width + '/' + $scope.height);

    $scope.animation = {
      earthquake: false
    };

    $scope.options = {
      mainScrollView: {
        paginated: true,
        direction: 0
      }
    }

  });