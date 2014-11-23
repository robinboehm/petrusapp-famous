angular.module('petrusApp')
  .provider('weatherService', function () {

    var _serverUrl = 'https://petrusapp-backend.herokuapp.com/';

    this.setServerUrl = function (serverUrl) {
      _serverUrl = serverUrl;
    };

    this.$get = function ($http) {
      var weather = {location: '', weather: 0, date: ''};

      function send(data) {
        return $http.post(_serverUrl, data,
          {
            headers: {'Content-Type': 'application/json'}
          });
      }

      return {
        data: weather,
        send: send
      }
    };


  });