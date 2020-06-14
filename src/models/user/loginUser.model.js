const fb = require('firebase');
const db = fb.database();
const md5 = require('md5');

// pass alt
const passAlt = require('../../passAlt.json');

module.exports = ({ username, password }, callback) => {
  db.ref('/users')
    .once('value')
    .then(data => {
      const users = Object.values(data.val());

      for (let user of users) {
        if (user.username === username &&
          user.password === md5(password + passAlt[0])) {
          return callback(user.token);
        }
      }

      return callback(false);
    })
    .catch(() => callback(false));
}