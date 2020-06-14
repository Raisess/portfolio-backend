const fb = require('firebase');
const config = require('../src/firebase/firebase.json');
fb.initializeApp(config);

const { checkApiToken } = require('../src/controllers/global.controller');

test('check if api token is valid :: true', () => {
  const token = '169dffe44e72e346a90ba467bd08f20d';

  return checkApiToken(token)
    .then(bool => expect(bool)
      .toBe(true));
});