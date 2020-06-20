const fb = require('firebase');
const config = require('../src/firebase/firebase.json');
fb.initializeApp(config);

const { checkApiToken } = require('../src/controllers/global.controller');
const uploadImg = require('../src/services/imgur_api');

test('check if api token is valid :: true', () => {
  const token = '169dffe44e72e346a90ba467bd08f20d';

  return checkApiToken(token)
    .then(bool => expect(bool)
      .toBe(true));
});

test('check image upload', () => {
  const img = 'https://img.ibxk.com.br/ns/rexposta/2019/07/09/09190831663418.jpg';

  return uploadImg(img)
    .then(res => expect(typeof res)
      .toBe('string'));
});