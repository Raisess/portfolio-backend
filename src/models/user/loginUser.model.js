const fb = require('firebase');
const db = fb.database();
const md5 = require('md5');

// pass alt
const passAlt = require('../../passAlt.json');

module.exports = ({ username, password }, callback) => {
  db.ref('/users')
    .once('value')
    .then(data => {
      const users = data.val();

      for (let user of users) {
        if (user.username === username &&
          user.password === md5(password + passAlt[0])) {
          return callback({
            username: user.username,
            avatar: user.avatar,
            email: user.email,
            token: user.token
          });
        }
      }
    })
    .catch(() => callback(false));
}