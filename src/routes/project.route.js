const router = require('express').Router();
// global controller
const { checkApiToken } = require('../controllers/global.controller');
// project controller
const { create, update, get, getAll } = require('../controllers/project.controller');

// create project route
/**
 * @param {
 *  username,
 *  name,
 *  description,
 *  cover,
 *  link,
 *  git,
 *  color
 * }
 */
router.post('/create?', async (req, res) => {
  try {
    // console.log(await checkApiToken(req.query.token));
    if (await checkApiToken(req.query.token)) {
      if (await create(req.body)) {
        return res.status(201).json({
          log: 'created project',
          success: true
        });
      } else {
        return res.status(503).json({
          log: 'project creation failed, retry request',
          success: false
        });
      }
    } else {
      return res.status(503).json({
        log: 'invalid api token',
        success: false
      });
    }
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      log: 'error in project creation'
    });
  }
});

// update project route
/**
 * ! need the project id
 * ! need the username
 * @param {
 *  name,
 *  description,
 *  cover,
 *  link,
 *  git,
 *  color
 * }
 */
router.put('/update/:username?', async (req, res) => {
  try {
    if (await checkApiToken(req.query.token)) {
      if (await update(req.query.id, req.params.username, req.body)) {
        return res.status(202).json({
          log: 'updated project',
          success: true
        });
      } else {
        return res.status(406).json({
          log: 'project update failed, retry request',
          success: false
        });
      }
    } else {
      return res.status(503).json({
        log: 'invalid api token',
        success: false
      });
    }
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      log: 'error in project update'
    });
  }
});

// get one project
/**
 * @param {
 *  id,
 *  username
 * }
 */
router.get('/get/:username/:id', (req, res) => {
  try {
    get(req.params.id, req.params.username, project => {
      if (!project) {
        return res.status(200).json({
          log: 'project get success',
          success: true,
          project: project
        });
      }

      return res.status().json({
        log: 'project get fail',
        success: false
      });
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      log: 'error on get a project'
    });
  }
});

// get all projects
/**
 * @param {
 *  username
 * }
 */
router.get('/getAll/:username', (req, res) => {
  try {
    getAll(req.params.username, projects => {
      if (!project) {
        return res.status(200).json({
          log: 'get all projects success',
          success: true,
          projects: projects
        });
      }

      return res.status().json({
        log: 'get all projects fail',
        success: false
      });
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      log: 'error on get all projects'
    });
  }
});

module.exports = router;