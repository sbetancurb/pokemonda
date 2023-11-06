const pokeneas = require('./pokeneas.json');
const os = require("os");

function getRandomPoke() {
    var random_number = Math.round(Math.random() * ((pokeneas.length - 1) - 0) + 0);
    var res = pokeneas[random_number];
    res.hostId = os.hostname();
    return res;
}

module.exports = getRandomPoke;