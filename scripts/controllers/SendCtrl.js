'use strict';

angular.module('petrusApp')
  .controller('SendCtrl', function ($scope) {

    $scope.options = {
      translate: [75, 80],
      size: [180, 225]
    };

    $scope.submit = function () {
      $scope.active = true;
    }

  });