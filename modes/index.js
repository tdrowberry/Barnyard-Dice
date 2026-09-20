const chickenout = require('./chickenOut');
const pigout = require('./pigout');
const quackquack = require('./quackQuack');
const captainhorse = require('./captainHorse');

const modes = { chickenout, pigout, quackquack, captainhorse };

function getMode(key) {
  return modes[key] || null;
}

module.exports = { modes, getMode };
