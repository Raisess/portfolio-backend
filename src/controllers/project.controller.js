const createProject = require('../models/project/createProject.model');
const updateProject = require('../models/project/updateProject.model');

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
  create: data => createProject(data),
  update: data => updateProject(data)
};