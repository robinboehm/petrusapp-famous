"use strict";


angular.module('petrusApp')
  .controller('ScrollViewCtrl', function ($scope,$famous) {

    var EventHandler = $famous['famous/core/EventHandler'];
    var Transitionable = $famous['famous/transitions/Transitionable'];
    var Engine = $famous['famous/core/Engine'];
    $scope.enginePipe = new EventHandler();
    Engine.pipe($scope.enginePipe);

    $scope.options = {
      mainScrollView: {
        paginated: true,
        direction: 0, //horizontal
        speedLimit: 5,
        margin: 10000
      }
    }

  });