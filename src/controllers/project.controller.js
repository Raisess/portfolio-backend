const createProject = require('../models/project/createProject.model');
const updateProject = require('../models/project/updateProject.model');
const { get, getAll } = require('../models/project/getProject.model');
const deleteProject = require('../models/project/deleteProject.model');

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
  get: (id, username, callback) => get(id, username, callback),
  /**
   * @param {
   *  username
   * }
   */
  getAll: (username, callback) => getAll(username, callback),
  /**
   * @param {
   *  id,
   *  username
   * }
   */
  delete_: (id, username) => deleteProject(id, username)
};