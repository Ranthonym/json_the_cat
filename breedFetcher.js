const request = require('request');
const fetchBreedDescription = (breedName, callback) => {
  const url = 'https://api.thecatapi.com/v1/breeds/search?q=';
  request (url + breedName, (error, response) => {
    if (error) {
      callback(error, null);
      return;
    } else  { 
        const data = JSON.parse(response.body);
        if (data[0])
        callback(null, data[0].description.trim());
        else callback(null, 'No breed exists');
    }
  });
};

module.exports = { fetchBreedDescription };