const get = require('lodash.get');

module.exports = api => api.lights()
    .then(result => get(result, 'lights'));
