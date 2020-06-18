const router = require('express').Router();
// global controller
const { checkApiToken } = require('../controllers/global.controller');
// project controller
const { create, update, get, getAll, delete_ } = require('../controllers/project.controller');

// create project route
/**
 * ! need API token
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
    const access = await checkApiToken(req.query.token);

    if (access) {
      if (await create(req.query.token, req.body)) {
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
    console.error(error.message);

    return res.status(500).json({
      log: 'error in project creation'
    });
  }
});

// update project route
/**
 * ! need API token
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
    const access = await checkApiToken(req.query.token);

    if (access) {
      if (await update(req.query.token, req.query.id, req.params.username, req.body)) {
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
    console.error(error.message);

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
      if (project) {
        return res.status(200).json({
          log: 'project get success',
          success: true,
          project: project
        });
      }

      return res.status(404).json({
        log: 'project get fail',
        success: false
      });
    });
  } catch (error) {
    console.error(error.message);

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
      if (projects) {
        return res.status(200).json({
          log: 'get all projects success',
          success: true,
          projects: projects
        });
      }

      return res.status(404).json({
        log: 'get all projects fail',
        success: false
      });
    });
  } catch (error) {
    console.error(error.message);

    return res.status(500).json({
      log: 'error on get all projects'
    });
  }
});

// delete a project
/**
 * ! needs username
 * ! needs API token
 * ! needs project id
 */
router.delete('/delete/:username?', async (req, res) => {
  try {
    const access = await checkApiToken(req.query.token);

    if (access) {
      if (await delete_(req.query.token, req.query.id, req.params.username)) {
        return res.status(200).json({
          log: 'project delete success',
          success: true
        });
      } else {
        return res.status(406).json({
          log: 'project delete fail',
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
    console.error(error.message);

    return res.status(500).json({
      log: 'error on delete a project'
    });
  }
});

module.exports = router;