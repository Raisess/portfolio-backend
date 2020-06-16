const fb = require('firebase');
const db = fb.database();
const md5 = require('md5');
const hash = require('../../modules/hash');

// user schema
const userSchema = require('../../schemas/user.schema');
// pass alt
const passAlt = require('../../passAlt.json');

module.exports = ({ email, avatar, username, name, github, password }) => {
  const id = hash();

  return db.ref('/users')
    .once('value')
    .then(data => {
      const users = Object.values(data.val());

      for (let user of users) {
        if (user.username === username) {
          return false;
        }
      }

      return db.ref(`/users/${id}`)
        .set(userSchema(
          id,
          md5(email + username + passAlt[0]),
          email,
          avatar,
          username,
          name,
          `https://github.com/${github}`,
          md5(password + passAlt[0])
        ))
        .then(() => true)
        .catch(() => false);
    })
    .catch(() => false)
}