const fb = require('firebase');
const db = fb.database();

// imgur upload service
const uploadImg = require('../../services/imgur_api');

module.exports = async (token, { name, avatar, github }) => {
  const avatarLink = await uploadImg(avatar);

  return db.ref('/users')
    .once('value')
    .then(data => {
      const users = Object.values(data.val());

      for (let user of users) {
        if (user.token === token) {
          return db.ref(`/users/${user.id}`)
            .update({
              update_at: new Date().toDateString(),
              name: name,
              github: `https://github.com/${github}`,
              avatar: avatarLink ? avatarLink : 'https://assets.newglue.com/assets/avatar_placeholder-c4a9963ad86c68649100b476add586667aaaf4672a3dbfd6abf0e7338f4f5337.jpg'
            })
            .then(() => true)
            .catch(() => false);
        }
      }

      return false;
    })
    .catch(() => false);
}