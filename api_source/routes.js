// create a controller object
// const controller = require("./controller");
import controller  from "./controller.js";
// declare a function and export it to be used in another file
// module.exports = function(weatherApp){
//     weatherApp.route("/about")
//                 .get(controller.about);
//     weatherApp.route("/weather")
//                 .get(controller.getWeather);
// };

// declare a function and export it to be used in another file
export default function(weatherApp) {
    weatherApp.route("/about")
              .get(controller.about);
    weatherApp.route("/weather")
              .get(controller.getWeather);
};