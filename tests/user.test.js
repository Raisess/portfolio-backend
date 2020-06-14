const fb = require('firebase');
const config = require('../src/firebase/firebase.json');
fb.initializeApp(config);

const { create } = require('../src/controllers/user.controller');

it('create a user :: {} === true', () => {
  return create({
    username: 'teste',
    password: 'teste',
    email: 'teste',
    avatar: 'teste'
  })
    .then(bool => expect(bool).toBe(true));
});