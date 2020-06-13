const fb = require('firebase');
const db = fb.database();
const hash = require('../../modules/hash');
// schema
const projectSchema = require('../../schemas/project.schema');

const id = hash();

module.exports = ({ name, description, cover, link, git, color }) => {
  return db.ref(`/projects/${id}`)
    .set(projectSchema(
      id,
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