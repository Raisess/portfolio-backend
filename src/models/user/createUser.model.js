const fb = require('firebase');
const db = fb.database();
const md5 = require('md5');
const hash = require('../../modules/hash');

// user schema
const userSchema = require('../../schemas/user.schema');
// pass alt
const passAlt = require('../../passAlt.json');

// imgur upload service
const uploadImg = require('../../services/imgur_api');

module.exports = ({ email, avatar, username, name, github, password }) => {
  const id = hash();

  const avatarLink = uploadImg(avatar)
    .then(res => res[1])
    .catch(() => 'https://assets.newglue.com/assets/avatar_placeholder-c4a9963ad86c68649100b476add586667aaaf4672a3dbfd6abf0e7338f4f5337.jpg');

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
          avatarLink,
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