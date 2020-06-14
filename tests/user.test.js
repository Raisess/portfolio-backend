const fb = require('firebase');
const config = require('../src/firebase/firebase.json');
fb.initializeApp(config);

const { create, login } = require('../src/controllers/user.controller');

it('create a user :: {} === true', () => {
  return create({
    username: 'teste',
    password: 'teste',
    email: 'teste',
    avatar: 'teste'
  })
    .then(bool => expect(bool).toBe(true));
});

test('login a user :: {} === data{}', () => {
  login({
    username: 'teste',
    password: 'teste'
  }, data => expect(data.username)
    .toBe('teste'));
});