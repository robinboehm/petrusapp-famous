'use strict';

angular.module('petrusApp')
  .controller('ListCtrl', function ($scope,weatherService) {
    $scope.result = weatherService.result;
  });