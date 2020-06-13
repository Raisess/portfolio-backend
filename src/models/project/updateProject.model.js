const fb = require('firebase');
const db = fb.database();

module.exports = (id, { name, description, cover, link, git, color }) => {
  return db.ref(`/projects/${id}`)
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