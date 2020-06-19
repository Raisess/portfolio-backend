const fb = require('firebase');
const config = require('../src/firebase/firebase.json');
fb.initializeApp(config);

const { create, update, get, delete_ } = require('../src/controllers/project.controller');

it('create a project :: {} === true', () => {
  return create({
    username: "teste",
    name: "teste",
    description: "teste",
    cover: "teste",
    link: "teste",
    git: "teste",
    color: "teste"
  })
    .then(bool => expect(bool).toBe(true));
});

it('update a project :: {} === true', () => {
  return update('<project-token>', '<project-id>', {
    username: "teste",
    name: "teste2",
    description: "teste",
    cover: "teste",
    link: "teste",
    git: "teste",
    color: "teste"
  })
    .then(bool => expect(bool).toBe(true));
});

test('get one project :: data{}', () => {
  const [username, id] = ['<username>', '<id>'];

  return get(id, username, data => expect(data.name)
    .toBe('<project-name>'));
});

it('delete a project :: true', () => {
  const [username, id] = ['<username>', '<id>'];

  return delete_(id, username)
    .then(bool => expect(bool)
      .toBe(true));
});