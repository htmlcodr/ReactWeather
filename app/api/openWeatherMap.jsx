var axios = require('axios');

// api = e9b797a8750c195833ac2ee6bddadc9d

//http://api.openweathermap.org/data/2.5/find?q=London&units=metric&appid=e9b797a8750c195833ac2ee6bddadc9d

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/find?appid=e9b797a8750c195833ac2ee6bddadc9d&units=metric';

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function (res) {
//      debugger;
      return res.data.list[0].main.temp;

// had to chnage this - I think the API has changed...

//      if (res.data.cod && res.data.message) {
//            throw new Error(requestUrl);
//        throw new Error(res.data.message);
//      } else {
//return res.data.list.main.temp;
//      }

    }, function (res) {
            throw new Error(res.data.message);
    });
  }
}
