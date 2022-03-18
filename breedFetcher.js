const request = require('request');


const fetchBreedDescription = function(breedName, callback) {
  
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    let data =  JSON.parse(body);
    if (data[0]) {
      callback(null, data[0].description);
    } else {
      callback("Breed not found", "Breed not found");
    }
    
  });

};

module.exports = {fetchBreedDescription};