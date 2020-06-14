const fb = require('firebase');
const config = require('../src/firebase/firebase.json');
fb.initializeApp(config);

const { create } = require('../src/controllers/project.controller');

it('create a project :: {} === true', async () => {
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