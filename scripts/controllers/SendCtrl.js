'use strict';

angular.module('petrusApp')
  .controller('SendCtrl', function ($scope, $timeout, weatherService, DeviceScale) {

    console.log('SendCtrl Scaling : ' + DeviceScale.toDevice(1));

    $scope.options = {
      translate: [DeviceScale.toDevice(75), DeviceScale.toDevice(80)],
      size: [DeviceScale.toDevice(184), DeviceScale.toDevice(227)]
    };

    $scope.transBoltX = DeviceScale.toDevice(76);
    $scope.transBoltY = DeviceScale.toDevice(360);
    $scope.widthBolt = DeviceScale.toDevice(134);
    $scope.heightBolt = DeviceScale.toDevice(158);

    $scope.submit = function () {
      // Activate Animations
      $scope.active = true;
      $scope.animation.earthquake = true;
      $scope.animation.fadeOut = true;

      // Set Data
      var date = SpinningWheel.getSelectedValues().keys;
      weatherService.data.date = date[2] + '-' + date[1] + '-' + date[0];
      weatherService.data.weather = weatherService.data.weather % 7;
      weatherService.send(weatherService.data)
        .then(function (result) {
          $scope.result.data = result.data;
        });

      $timeout(function () {

        // Change Page to Letter View
        $famous.find('fa-scroll-view')[0].renderNode.goToNextPage();

        // Change Animation
        $scope.animation.earthquake = false;
        $scope.animation.fadeOut = false;
        $scope.animation.fadeIn = true;

        $timeout(function () {
          // Go To Last Page
          //$famous.find('fa-scroll-view')[0].renderNode.goToNextPage();
          $scope.activeViews.listView = true;
        }, 3000);

      }, 5000);
    }

  });