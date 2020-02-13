const request = require('request');
const url = 'https://api.thecatapi.com/v1/breeds/search?q=';
const inputBreed = process.argv[2];
request (url + inputBreed, (error, response) => { 
  const data = JSON.parse(response.body);
  if (data.length > 0) {
    console.log(data[0].description);
  } else {
    console.log("Breed not found");
  }
});