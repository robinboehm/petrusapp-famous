'use strict';

angular.module('petrusApp')
  .controller('SendCtrl', function ($scope, $timeout, weatherService) {

    $scope.options = {
      translate: [75, 80],
      size: [180, 225]
    };

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
          $famous.find('fa-scroll-view')[0].renderNode.goToNextPage();
        }, 3000);

      }, 5000);
    }

  });