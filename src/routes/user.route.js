const router = require('express').Router();
// global controller
const { checkApiToken } = require('../controllers/global.controller');
// user controller
const { create, login, get, update } = require('../controllers/user.controller');

// create user route
/**
 * @param {
 *  username,
 *  name,
 *  github,
 *  email,
 *  password,
 *  avatar:Base64 || url
 * }
 */
router.post('/create', async (req, res) => {
  try {
    if (await create(req.body)) {
      return res.status(201).json({
        log: 'created user',
        success: true
      });
    }

    return res.status(503).json({
      log: 'user creation failed, retry request',
      success: false
    });
  } catch (error) {
    console.error(error.message);

    return res.status(500).json({
      log: 'error in user creation'
    });
  }
});

// login user route
/**
 * @param {
 *  username,
 *  password
 * }
 */
router.post('/login', (req, res) => {
  try {
    login(req.body, token => {
      if (token) {
        return res.status(200).json({
          log: 'user logged',
          success: true,
          token: token
        });
      }

      return res.status(503).json({
        log: 'user login failed, retry request',
        success: false
      });
    });
  } catch (error) {
    console.error(error.message);

    return res.status(500).json({
      log: 'error in user login'
    });
  }
});

// update user route
/**
 * ! needs API key
 * @param {
 *  name,
 *  avatar,
 *  github
 * }
 */
router.put('/update?', async (req, res) => {
  try {
    const access = await checkApiToken(req.query.token);

    if (access) {
      if (await update(req.query.token, req.body)) {
        return res.status(202).json({
          log: 'user update success',
          success: true
        });
      }

      return res.status(406).json({
        log: 'user update failed, retry request',
        success: false
      });
    }

    return res.status(503).json({
      log: 'invalid api token',
      success: false
    });
  } catch (error) {
    console.error(error);

    return res.status().json({
      log: 'error in user update'
    });
  }
});

// get user info
/**
 * @param {
 *  username
 * }
 */
router.get('/get/:username', (req, res) => {
  try {
    get(req.params.username, user => {
      if (user) {
        return res.status(200).json({
          log: 'user get success',
          success: true,
          user: user
        });
      }

      return res.status(404).json({
        log: 'user get fail',
        success: false
      });
    });
  } catch (error) {
    console.error(error.message);

    return res.status(500).json({
      log: 'error in user get route'
    });
  }
});

module.exports = router;