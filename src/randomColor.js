const setLightState = require('./setLightState');

module.exports = (api, lights) => setLightState(api, lights, {
    xy: [
        Math.random(),
        Math.random()
    ]
});

