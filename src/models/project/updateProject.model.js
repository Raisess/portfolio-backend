const fb = require('firebase');
const db = fb.database();

module.exports = (token, id, { username, name, description, cover, link, git, color }) => {
  return db.ref(`/projects/${username}/${id}`)
    .once('value')
    .then(data => {
      if (data.val().token === token) {
        return db.ref(`/projects/${username}/${id}`)
          .update({
            updated_at: new Date().toDateString(),
            name: name,
            description: description,
            cover: cover,
            link: link,
            git: git,
            color: color
          })
          .then(() => true)
          .catch(() => false);
      }

      return false;
    });
}