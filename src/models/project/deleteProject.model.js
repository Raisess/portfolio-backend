const fb = require('firebase');
const db = fb.database();

module.exports = (id, username) => {
  return db.ref(`/projects/${username}/${id}`)
    .remove()
    .then(() => true)
    .catch(() => false);
}