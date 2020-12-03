const request = require("request");

const whatBreed = process.argv[2];  //=> instead of slice going to get specific index
const adressRequest = `https://api.thecatapi.com/v1/breeds/search?q=${whatBreed}`;

request(adressRequest, (error, response, body) => {
  const data = JSON.parse(body);
  if(error) {
    console.log("unfortunately, error heppened: ", error); // Print the error if one occurred
  }
  if (whatBreed === undefined) {
    console.log("Failed! Can't find such breed..."); // Print the error if one occurred
  } else {
    console.log("Sucsesfully requested!");
    console.log(adressRequest, data[0]); //=> console log content from the adressRequest if everything ok
    }
});