const imgur = require('imgur');
const isBase64 = require('is-base64');

// credencials data
const { client_id, email, password } = require('./credencials.json');

// upload image
module.exports = img => {
  imgur.setCredentials(email, password, client_id);

  if (isBase64(img)) {
    return imgur.uploadBase64(img)
      .then(res => {
        // console.log(res.data.link);
        return res.data.link;
      })
      .catch(err => {
        // console.error(err.message);
        return false;
      });
  }

  return imgur.uploadUrl(img)
    .then(res => {
      // console.log(res.data.link);
      return res.data.link;
    })
    .catch(err => {
      // console.error(err.message);
      return false;
    });
}