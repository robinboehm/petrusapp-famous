"use strict";


angular.module('petrusApp')
  .directive('hebel', function ($rootScope) {
    return {
      restrict: 'E',
      scope: {
        maxHeight: '@',
        minHeight: '@',
        onSubmit: '&',
        options: '='
      },
      link: function (scope, iElement) {

        var minHeight = scope.minHeight | 74;
        var maxHeight = scope.maxHeight | 180;

        var alreadySubmitted = false;

        function getCoordinates(event) {
          var touches = event.touches && event.touches.length ? event.touches : [event];
          var e = (event.changedTouches && event.changedTouches[0]) ||
            (event.originalEvent && event.originalEvent.changedTouches &&
            event.originalEvent.changedTouches[0]) ||
            touches[0].originalEvent || touches[0];

          return {
            x: e.clientX,
            y: e.clientY
          };
        }

        var startCoords, lastPos, totalX = 0, totalY = 0,
          startTop, startHeight;


        iElement.on('touchstart mousedown', function (event) {
          startTop = scope.options.translate[1];
          startHeight = scope.options.size[1];
          startCoords = getCoordinates(event);

          lastPos = startCoords;
        });

        iElement.on('touchmove mousemove', function (event) {
          // Android will send a touchcancel if it thinks we're starting to scroll.
          // So when the total distance (+ or - or both) exceeds 10px in either direction,
          // we either:
          // - On totalX > totalY, we send preventDefault() and treat this as a swipe.
          // - On totalY > totalX, we let the browser handle it as a scroll.

          if (!startCoords) return;
          var coords = getCoordinates(event);

          totalX += Math.abs(coords.x - lastPos.x);
          totalY += Math.abs(coords.y - lastPos.y);

          lastPos = coords;

          var top = startTop - (startCoords.y - coords.y);
          var height = startHeight + (startCoords.y - coords.y);
          if (top > minHeight && top < maxHeight) {
            $rootScope.$apply(function(){
              scope.options.translate[1] = top;
              scope.options.size[1] = height;
            });
          }
          if (!alreadySubmitted && top > (maxHeight - 5)) {
            alreadySubmitted = true;
            $rootScope.$apply(function () {
              scope.onSubmit();
            });


          }
        });

      }
    }

  });