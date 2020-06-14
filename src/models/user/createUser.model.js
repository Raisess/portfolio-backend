const fb = require('firebase');
const db = fb.database();
const md5 = require('md5');
const hash = require('../../modules/hash');

// user schema
const userSchema = require('../../schemas/user.schema');
// pass alt
const passAlt = require('../../passAlt.json');

module.exports = ({ email, avatar, username, password }) => {
  const id = hash();

  return db.ref(`/users/${id}`)
    .set(userSchema(
      id,
      md5(email + username + passAlt[0]),
      email,
      avatar,
      username,
      md5(password + passAlt[0])
    ))
    .then(() => true)
    .catch(() => false);
}