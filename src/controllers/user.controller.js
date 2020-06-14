const createUser = require('../models/user/createUser.model');
const loginUser = require('../models/user/loginUser.model');

module.exports = {
  /**
   * @param {
   *  email,
   *  avatar,
   *  username,
   *  password
   * }
   */
  create: data => createUser(data),
  /**
   * @param {
   *  username,
   *  password
   * }
   */
  login: (data, callback) => loginUser(data, callback)
};