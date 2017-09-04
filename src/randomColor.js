module.exports = (api, lights) => {
    lights.forEach(light => {
        api.setLightState(light.id, {
            "xy":[
                Math.random(),
                Math.random()
            ]
        });
    });
}
