const fb = require('firebase');
const config = require('../src/firebase/firebase.json');
fb.initializeApp(config);

const { create, login, get, update } = require('../src/controllers/user.controller');

it('create a user :: {} === true', () => {
  return create({
    username: 'teste',
    name: 'teste teste123',
    github: 'Raisess',
    password: 'teste',
    email: 'teste',
    avatar: 'teste'
  })
    .then(bool => expect(bool).toBe(true));
});

test('login a user :: {} === data{}', () => {
  return login({
    username: 'teste',
    password: 'teste'
  }, data => expect(data.username)
    .toBe('teste'));
});

test('get  user :: {} === data{}', () => {
  return get('teste', data => expect(typeof data)
    .toBe('object'));
});

it('update user data', () => {
  const token = '42c554b63020776f19d0e00334562f5e';
  const data = {
    name: 'teste teste123',
    github: 'teste',
    avatar: 'https://img.ibxk.com.br/ns/rexposta/2019/07/09/09190831663418.jpg'
  };

  return update(token, data)
    .then(bool => expect(bool)
      .toBe(true));
});