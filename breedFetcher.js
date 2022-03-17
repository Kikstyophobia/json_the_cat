const request = require('request');
const args = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${args}`, (error, response, body) => {
  if (error) {
    console.log("Error!:", error);
  }
  let data =  JSON.parse(body);
  console.log(data[0].description);

});