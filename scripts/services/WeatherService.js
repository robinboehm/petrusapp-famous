angular.module('petrusApp')
  .factory('weatherService', function(){
    var weather = { locationName: '', weatherType: 0 };

    function send() {
      $http.post('http://petrusapp.herokuapp.com/data/', {
        timestamp: (new Date()).getTime(),
        data: data
      },
      {
        headers: { 'Content-Type': 'application/json' }
      });
    }

    return {
      weather: weather,
      weatherDate: weather.weatherDate,
      weatherType: weather.weatherType,
      locationName: weather.locationName,
      send: send
    }
  });