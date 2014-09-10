'use strict';

angular.module('petrusApp')
  .controller('DateCtrl', function ($scope) {

    // ScrollView sends no event for DateView? So quickfix Timeout
    setTimeout(function swExample() {
      var now = new Date();
      var days = {};
      var years = {};
      var months = {
        1: 'Jan',
        2: 'Feb',
        3: 'Mar',
        4: 'Apr',
        5: 'May',
        6: 'Jun',
        7: 'Jul',
        8: 'Aug',
        9: 'Sep',
        10: 'Oct',
        11: 'Nov',
        12: 'Dec'
      };

      for (var i = 1; i < 32; i += 1) {
        days[i] = i;
      }

      for (i = now.getFullYear(); i < now.getFullYear() + 11; i += 1) {
        years[i] = i;
      }


      SpinningWheel.container = document.getElementById('spinningwheel');
      SpinningWheel.addSlot(days, 'right', now.getDate());
      SpinningWheel.addSlot(months, '', now.getMonth() + 1);
      SpinningWheel.addSlot(years, 'right', now.getFullYear());

      SpinningWheel.open();
    },1000);
  });