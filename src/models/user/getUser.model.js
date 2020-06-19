const fb = require('firebase');
const db = fb.database();

module.exports = (username, callback) => {
  db.ref('/users')
    .once('value')
    .then(data => {
      const users = Object.values(data.val());

      for (let user of users) {
        if (user.username === username) {
          const { username, name, github, email, avatar, created_at } = user;

          return callback({
            username: username,
            name: name,
            github: github,
            email: email,
            avatar: avatar,
            created_at: created_at
          });
        }
      }

      return callback(false);
    })
    .catch(() => callback(false));
}