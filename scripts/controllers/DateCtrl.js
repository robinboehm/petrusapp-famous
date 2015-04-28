'use strict';

angular.module('petrusApp')
  .controller('DateCtrl', function ($scope, DeviceScale) {


    var active = true;

    // scaling GUI elements
    $scope.transClockHandX = DeviceScale.toDevice(-80);
    $scope.transClockHandY = DeviceScale.toDevice(-156);
    $scope.sizeClockHand = DeviceScale.toDevice(50);

    $scope.transSpinningWheelX = DeviceScale.toDevice(30);
    $scope.transSpinningWheelY = DeviceScale.toDevice(190);
    $scope.widthSpinningWheel = DeviceScale.toDevice(250);
    $scope.heightSpinningWheel = DeviceScale.toDevice(215);

    // ScrollView sends no event for DateView? So quickfix Timeout
    setTimeout(function swExample() {


      // Hack to disable SpinningWheel on all other pages, sorry no time for a good solution atm
      var scrollView = $famous.find('#main-scroll-view')[0].renderNode,
        scrollViewHandler = scrollView.sync;
      var lastIndex = 0;
      scrollViewHandler.on('start', function (event) {
        var currentIndex = scrollView._node.index;
        if (currentIndex === 1) {
          if (!active) {
            SpinningWheel.reAddEventListener();
            active = true;
          }
        }
        else {
          if (active) {
            SpinningWheel.removeEventListener();
            active = false;
          }
        }

        lastIndex = scrollView._node.index;

      });


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
    }, 1000);
  });