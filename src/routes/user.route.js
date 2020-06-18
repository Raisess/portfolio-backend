const router = require('express').Router();
// user controller
const { create, login } = require('../controllers/user.controller');

// create user route
/**
 * @param {
 *  username,
 *  name,
 *  github,
 *  email,
 *  password,
 *  avatar:Base64
 * }
 */
router.post('/create', async (req, res) => {
  try {
    if (await create(req.body)) {
      return res.status(201).json({
        log: 'created user',
        success: true
      });
    } else {
      return res.status(503).json({
        log: 'user creation failed, retry request',
        success: false
      });
    }
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
      } else {
        return res.status(503).json({
          log: 'user login failed, retry request',
          success: false
        });
      }
    });
  } catch (error) {
    console.error(error.message);

    return res.status(500).json({
      log: 'error in user login'
    });
  }
});

module.exports = router;