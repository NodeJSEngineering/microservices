// create a variable referencing to the package.json file
import properties from "../package.json"  assert { type: "json" };;

// create a variable and require the weather file inside the service folder
import weather from "../service/weather.js";

// create an object
let controllers = {
    about: (req, res) => {

        //create an object and access the values in the package.json file
        let aboutInfo = {
            name: properties.name,
            description: properties.description,
            author: properties.author
        }
        // return the object in json format
        res.json(aboutInfo);
    },

    //create a function
    getWeather: function (req, res) {
        //call the find method on the weather module
        weather.find(req, res, function (err, weath) {
            if (err)
                res.send(err);
            res.json(weath);
        });
    },
};

//export the controller module so it can be use in another file within the application
export default controllers;