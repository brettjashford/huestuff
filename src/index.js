require('dotenv').config()
const {HueApi} = require('node-hue-api');
const findLights = require('./findLights');
const randomColor = require('./randomColor');

const api = new HueApi(process.env.HUE_HOST, process.env.HUE_USER);

findLights(api)
    .then(lights => {
        setInterval(randomColor.bind(null, api, lights), 1000);
    })
    .fail(console.error);
