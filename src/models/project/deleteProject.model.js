const fb = require('firebase');
const db = fb.database();

module.exports = (token, id, username) => {
  return db.ref(`/projects/${username}/${id}`)
    .once('value')
    .then(data => {
      if (data.val().token === token) {
        return db.ref(`/projects/${username}/${id}`)
          .remove()
          .then(() => true)
          .catch(() => false);
      }

      return false;
    });
}