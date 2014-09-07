'use strict';

angular.module('petrusApp')
  .controller('LocationCtrl', function ($scope, weatherService) {

    $scope.weather = weatherService;

    $scope.keys = [
      {key: 'q', top: 296, left: 17, width: 33, height: 46, bgLeft: 0, bgTop: 0},
      {key: 'w', top: 290, left: 45, width: 34, height: 47, bgLeft: -50, bgTop: 0},
      {key: 'e', top: 289, left: 77, width: 31, height: 47, bgLeft: -100, bgTop: 0},
      {key: 'r', top: 286, left: 105, width: 32, height: 49, bgLeft: -150, bgTop: 0},
      {key: 't', top: 283, left: 135, width: 31, height: 52, bgLeft: -200, bgTop: 0},
      {key: 'z', top: 284, left: 164, width: 31, height: 52, bgLeft: -250, bgTop: 0},
      {key: 'u', top: 285, left: 193, width: 30, height: 50, bgLeft: -300, bgTop: 0},
      {key: 'i', top: 287, left: 220, width: 33, height: 47, bgLeft: -350, bgTop: 0},
      {key: 'o', top: 288, left: 246, width: 35, height: 46, bgLeft: -400, bgTop: 0},
      {key: 'p', top: 293, left: 276, width: 36, height: 46, bgLeft: -450, bgTop: 0},
      {key: 'a', top: 348, left: 25, width: 34, height: 52, bgLeft: 0, bgTop: -65},
      {key: 's', top: 344, left: 52, width: 35, height: 50, bgLeft: -50, bgTop: -65},
      {key: 'd', top: 342, left: 83, width: 34, height: 53, bgLeft: -100, bgTop: -65},
      {key: 'f', top: 339, left: 113, width: 37, height: 56, bgLeft: -150, bgTop: -65},
      {key: 'g', top: 337, left: 147, width: 36, height: 57, bgLeft: -200, bgTop: -65},
      {key: 'h', top: 342, left: 180, width: 33, height: 54, bgLeft: -250, bgTop: -65},
      {key: 'j', top: 342, left: 211, width: 31, height: 54, bgLeft: -300, bgTop: -65},
      {key: 'k', top: 342, left: 240, width: 33, height: 54, bgLeft: -350, bgTop: -65},
      {key: 'l', top: 344, left: 271, width: 33, height: 54, bgLeft: -400, bgTop: -65},
      {key: 'y', top: 405, left: 56, width: 33, height: 54, bgLeft: 0, bgTop: -130},
      {key: 'x', top: 403, left: 87, width: 30, height: 54, bgLeft: -50, bgTop: -130},
      {key: 'c', top: 397, left: 116, width: 34, height: 59, bgLeft: -100, bgTop: -130},
      {key: 'v', top: 394, left: 148, width: 36, height: 61, bgLeft: -150, bgTop: -130},
      {key: 'b', top: 401, left: 183, width: 32, height: 55, bgLeft: -200, bgTop: -130},
      {key: 'n', top: 401, left: 213, width: 31, height: 57, bgLeft: -250, bgTop: -130},
      {key: 'm', top: 406, left: 241, width: 29, height: 53, bgLeft: -300, bgTop: -130},
      {key: '.', top: 396, left: 13, width: 36, height: 62, bgLeft: 0, bgTop: -200},
      {key: '-', top: 459, left: 22, width: 38, height: 43, bgLeft: -50, bgTop: -200},
      {key: ' ', top: 458, left: 73, width: 179, height: 51, bgLeft: -150, bgTop: -200},
      {key: 'del', top: 402, left: 278, width: 42, height: 49, bgLeft: -100, bgTop: -200}
    ];


    $scope.keyClick = function (key, $event) {
      if (key === 'del') {
        $scope.weather.locationName = $scope.weather.locationName.slice(0, -1);
      } else if ($scope.weather.locationName.length < 20) {
        $scope.weather.locationName += key.toUpperCase();
      }
    };
  });