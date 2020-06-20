const createUser = require('../models/user/createUser.model');
const loginUser = require('../models/user/loginUser.model');
const getUser = require('../models/user/getUser.model');
const updateUser = require('../models/user/updateUser.model');

module.exports = {
  /**
   * @param {
   *  email,
   *  avatar,
   *  username,
   *  name,
   *  github,
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
  login: (data, callback) => loginUser(data, callback),
  /**
   * @param {
   *  username
   * }
   */
  get: (username, callback) => getUser(username, callback),
  /**
   * @param {
   *  token,
   *  {
   *    name,
   *    avatar,
   *    github
   *  }
   * }
   */
  update: (token, data) => updateUser(token, data)
};