const createUser = require('../models/user/createUser.model');

module.exports = {
  /**
   * @param {
   *  email,
   *  avatar,
   *  username,
   *  password
   * }
   */
  create: data => createUser(data)
};