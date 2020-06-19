const fb = require('firebase');
const db = fb.database();

// get one
module.exports.get = (id, username, callback) => {
  db.ref(`/projects/${username}/${id}`)
    .once('value')
    .then(data => {
      let project = data.val() || false;
      project.token = false;

      return callback(project);
    })
    .catch(() => callback(false));
}

// get all
module.exports.getAll = (username, callback) => {
  db.ref(`/projects/${username}`)
    .once('value')
    .then(data => {
      let projects = Object.values(data.val()) || false;

      for (let project of projects) {
        project.token = false;
      }

      return callback(projects);
    })
    .catch(() => callback(false));
}