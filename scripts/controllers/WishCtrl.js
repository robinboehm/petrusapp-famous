'use strict';

angular.module('petrusApp')
  .controller('WishCtrl', function ($scope,weatherService) {

    weatherService.data.temperature = 20;
    var minHeight = 140;
    var maxHeight = 340;
    $scope.handleTouch = function (event) {
      if (event && event.changedTouches && event.changedTouches[0]) {
        var touch = event.changedTouches[0];
      }
      var currentY = touch.clientY;
      var step = (maxHeight - minHeight) / 100;
      if (currentY < maxHeight && currentY > minHeight) {
        $scope.weather.temperature = ((maxHeight - currentY) / step) - 45;
      }

    }

  });