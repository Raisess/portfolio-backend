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
  const img = 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAmUlEQVQ4je2TsQ3CMBBFnxMa08WR2IQKJskIUNwMZAcYwWIQMs65JCUpEEIYW4pJy6v+6e6+/hVnnGsAzsCBMi7AsbbW/rIMsAU2xrnmkeruuzW7zgIw+JGbv6fGQpWzfy3HOsJlDQY/AlCv3jpF9oS5ZBOICKoB1YCIlCdQDR9127qyBHP5Gyw3CBXPr/qi709JHXE1S995AsqoJu8x78GsAAAAAElFTkSuQmCC';

  return uploadImg(img)
    .then(res => expect(res[0])
      .toBe(true));
});