const imgur = require('imgur');
const { client_id, email, password } = require('./credencials.json');

imgur.setCredentials(email, password, client_id);

// upload image
module.exports = img => {
  return imgur.uploadBase64(img)
    .then(res => {
      console.log(res.data.link);

      return [true, res.data.link];
    })
    .catch(err => {
      console.error(err.message);

      return [false];
    });
}