const checkApiToken = require('../models/global/checkApiToken.model');

module.exports = {
  /**
   * @param {
   *  token
   * }
   */
  checkApiToken: token => checkApiToken(token)
};