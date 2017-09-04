require('dotenv').config()
const {HueApi} = require('node-hue-api');
const findLights = require('./findLights');
const randomColor = require('./randomColor');
const randomOnOff = require('./randomOnOff');

const api = new HueApi(process.env.HUE_HOST, process.env.HUE_USER);

findLights(api)
    .then(lights => {
        setInterval(() => {
            randomOnOff(api, lights);
            randomColor(api, lights);
        }, 1000);
    })
    .fail(console.error);
