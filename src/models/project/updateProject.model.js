const fb = require('firebase');
const db = fb.database();

// imgur upload service
const uploadImg = require('../../services/imgur_api');

module.exports = (token, id, username, { name, description, cover, link, git, color }) => {
  const coverLink = uploadImg(cover);

  return db.ref(`/projects/${username}/${id}`)
    .once('value')
    .then(data => {
      if (data.val().token === token) {
        return db.ref(`/projects/${username}/${id}`)
          .update({
            updated_at: new Date().toDateString(),
            name: name,
            description: description,
            cover: coverLink ? coverLink : 'https://www.faiauto.com/content/uploads/2016/02/placeholder-banner.png',
            link: link,
            git: git,
            color: color
          })
          .then(() => true)
          .catch(() => false);
      }

      return false;
    })
    .catch(() => false);
}