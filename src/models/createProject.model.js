const fb = require('firebase');
const db = fb.database();
const hash = require('../modules/hash');

const projectSchema = require('../schemas/project.schema');

module.exports = ({ name, description, cover, link, git, color }) => {
  db.ref('/projects')
    .set(projectSchema(
      hash(),
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