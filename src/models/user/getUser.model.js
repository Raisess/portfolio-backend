const fb = require('firebase');
const db = fb.database();

module.exports = (username, callback) => {
  db.ref(`/users/${username}`)
    .once('value')
    .then(data => {
      const { username, name, github, email, avatar, created_at } = data.val();

      return callback({
        username: username,
        name: name,
        github: github,
        email: email,
        avatar: avatar,
        created_at: created_at
      });
    })
    .catch(() => callback(false));
}