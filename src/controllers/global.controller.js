const checkApiToken = require('../models/goblal/checkApiToken.model');

module.exports = {
  /**
   * @param {
   *  token
   * }
   */
  checkApiToken: token => checkApiToken(token)
};