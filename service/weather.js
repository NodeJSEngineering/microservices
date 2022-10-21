// declare the request package we added to the package.json
let request = require("request");

// assign your api key and api url to a variable
const apiKey = "";
// const apiUrl = "https://home.openweathermap.org/dashboard/trigger/";
// https://home.openweathermap.org/dashboard/trigger/f8006ef42b372f6ee93989f275199fe2/weather.json
// https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={API key}

let weather = {
    find: (req, res, next) => {
        // console.log(req.params, 'pppp')
        // request(apiUrl + apiKey + "/weather.json" + req.params.weather,
        request("https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=" + apiKey,
            function (error, response, body) {
                //check that there is no error
                if (!error && response.statusCode == 200) {
                    response = JSON.parse(body);
                    res.send(response);
                } else {
                    console.log(response.statusCode + response.body);
                    res.send("An error occurred, it could be from your api");
                }
            });
    }
};

//export the weather module 
module.exports = weather;
