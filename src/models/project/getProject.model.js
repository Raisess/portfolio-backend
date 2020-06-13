const fb = require('firebase');
const db = fb.database();

// get one
module.exports.get = (id, username, callback) => {
  db.ref(`/projects/${username}/${id}`)
    .once('value')
    .then(data => {
      const project = data.val() || false;

      return callback(project);
    })
    .catch(() => false);
}

// get all
module.exports.getAll = (username, callback) => {
  db.ref(`/projects/${username}`)
    .once('value')
    .then(data => {
      const projects = Object.values(data.val()) || false;

      return callback(projects);
    })
    .catch(() => false);
}