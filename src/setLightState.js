module.exports = (api, lights, state) => {
    lights.forEach(light => {
        api.setLightState(light.id, state);
    });
}
