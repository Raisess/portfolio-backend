const randomStr = require('random-string');

module.exports = l => randomStr({
  length: l || 16,
  numeric: true,
  letters: true
});