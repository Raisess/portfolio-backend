const createProject = require('../models/project/createProject.model');
const updateProject = require('../models/project/updateProject.model');
const { get, getAll } = require('../models/project/getProject.model');

module.exports = {
  /**
   * @param {
   *  username,
   *  name,
   *  description,
   *  cover,
   *  link,
   *  git,
   *  color
   * }
   */
  create: data => createProject(data),
  /**
   * @param {
    *  name,
    *  description,
    *  cover,
    *  link,
    *  git,
    *  color
    * }
    */
  update: (id, username, data) => updateProject(id, username, data),
  /**
   * @param {
    *  id,
    *  username
    * }
    */
  get: (id, username) => get(id, username),
  /**
   * @param {
    *  username
    * }
    */
  getAll: username => getAll(username)
};