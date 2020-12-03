const request = require("request");


const fetchBreedDescription = function(breedName, callback) {

  const adressRequest = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(adressRequest, (error, response, body) => {
    if (error) {
      callback(`Unfortunately, error heppened: ${error}`, null); // Print the error if one occurred
    }
    const data = JSON.parse(body);
    const breed = data[0];
    if (breed) {
      callback(null, breed.description);
    } else {
      callback("Can't find such breed", null);
    }
  });
};

module.exports = {fetchBreedDescription};