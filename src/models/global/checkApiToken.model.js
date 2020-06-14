const fb = require('firebase');
const db = fb.database();

module.exports = token => {
  return db.ref('/users')
    .once('value')
    .then(data => {
      const users = data.val();

      for (let user of users) {
        if (user.token === token) {
          return true;
        }
      }
    })
    .catch(() => false);
}