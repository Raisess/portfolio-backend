const createProject = require('../models/createProject.model');

module.exports = {
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
  create: data => createProject(data)
};