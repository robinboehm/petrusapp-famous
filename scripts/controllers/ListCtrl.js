'use strict';

angular.module('petrusApp')
  .controller('ListCtrl', function ($scope, weatherService, DeviceScale) {

    console.log('ListCtrl Scaling : ' + DeviceScale.toDevice(1));

    $scope.widthResult = DeviceScale.toDevice(261);
    $scope.heightResult = DeviceScale.toDevice(307);

    $scope.transX0 = DeviceScale.toDevice(250);
    $scope.transY0 = DeviceScale.toDevice(195);

    $scope.transX1 = DeviceScale.toDevice(120);
    $scope.transY1 = DeviceScale.toDevice(135);

    $scope.transX2 = DeviceScale.toDevice(180);
    $scope.transY2 = DeviceScale.toDevice(125);

    $scope.transX3 = DeviceScale.toDevice(240);
    $scope.transY3 = DeviceScale.toDevice(120);

    $scope.transX4 = DeviceScale.toDevice(245);
    $scope.transY4 = DeviceScale.toDevice(285);

    $scope.transX5 = DeviceScale.toDevice(130);
    $scope.transY5 = DeviceScale.toDevice(205);

    $scope.transX6 = DeviceScale.toDevice(190);
    $scope.transY6 = DeviceScale.toDevice(200);

    $scope.transReloadX = DeviceScale.toDevice(245);
    $scope.transReloadY = DeviceScale.toDevice(485);

    $scope.widthPfeil = DeviceScale.toDevice(66);
    $scope.heightPfeil = DeviceScale.toDevice(68);

    $scope.result = weatherService.result;
  });