const fb = require('firebase');
const db = fb.database();

module.exports = token => {
  db.ref('/users')
    .once('value')
    .then(data => {
      const users = Object.values(data.val());

      for (let user of users) {
        if (user.token === token) {
          return true;
        }
      }
    })
    .catch(() => false);
}