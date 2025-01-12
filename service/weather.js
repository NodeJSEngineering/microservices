// declare the request package we added to the package.json
import request from "request";
const apiKey = "";

let weather = {
    find: (req, res, next) => {
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
export default weather;
