const Axios = require('axios');

const bangkokForecast = async () => {
  const city = 'Bangkok';
  const country = 'th';
  const key = 'e5446373eef6128679c7fa8a1951d788';
  const units = 'metric';
  const cnt = '7';
  let result = [];

  try {
      const response = await Axios.get(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${city},${country}&cnt=${cnt}&units=${units}&appid=${key}`);
      console.log(response);
      result.push(response.list.map( (item) => {
          return {
              date: new Date(item.dt),
              minTemp: item.temp.min,
              maxTemp: item.temp.min,
          };
      } ))
      return result;
  } catch (error) {
      return error;
  }
};

module.exports = { bangkokForecast };
