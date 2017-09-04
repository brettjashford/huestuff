require('dotenv').config()

const HueApi = require("node-hue-api").HueApi;

const displayResult = result => {
    console.log(JSON.stringify(result, null, 2));
};


const api = new HueApi(process.env.HUE_HOST, process.env.HUE_USER);

// api.getFullState().then(displayResult).done();

api.lights()
    .then(displayResult)
    .done();


