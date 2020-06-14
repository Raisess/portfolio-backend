const fb = require('firebase');
const db = fb.database();
const hash = require('../../modules/hash');
// schema
const projectSchema = require('../../schemas/project.schema');

module.exports = ({ username, name, description, cover, link, git, color }) => {
  const id = hash();

  return db.ref(`/projects/${username}/${id}`)
    .set(projectSchema(
      id,
      username,
      name,
      description,
      cover,
      link,
      git,
      color
    ))
    .then(() => true)
    .catch(() => false);
}