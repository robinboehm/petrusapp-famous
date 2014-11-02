'use strict';

angular.module('petrusApp')
  .controller('SendCtrl', function ($scope, $timeout) {

    $scope.options = {
      translate: [75, 80],
      size: [180, 225]
    };

    $scope.submit = function () {
      $scope.active = true;
      $scope.animation.earthquake = true;
      $scope.animation.fadeOut = true;

      $timeout(function(){
        $famous.find('fa-scroll-view')[0].renderNode.goToNextPage();
        $scope.animation.earthquake = false;
        $scope.animation.fadeOut = false;
        $scope.animation.fadeIn = true;


        $timeout(function(){
          $famous.find('fa-scroll-view')[0].renderNode.goToNextPage();
        },3000);

      },5000);
    }

  });