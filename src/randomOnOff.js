const setLightState = require('./setLightState');

module.exports = (api, lights) => setLightState(api, lights, {on: Math.random() > 0.5});
