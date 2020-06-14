const fb = require('firebase');
const db = fb.database();
const hash = require('../../modules/hash');

const id = hash();
// user schema
const userSchema = require('../../schemas/user.schema');

module.exports = ({ email, avatar, username, password }) => {
  return db.ref(`/users/${id}`)
    .set(userSchema(
      id,
      email,
      avatar,
      username,
      password
    ))
    .then(() => true)
    .catch(() => false);
}