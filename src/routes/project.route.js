const router = require('express').Router();
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
router.post('/create', (req, res) => {
  try {
    if (create(req.body)) {
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
  } catch (error) {
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
router.put('/update/:username?', (req, res) => {
  try {
    if (update(req.query.id, req.params.username, req.body)) {
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
  } catch (error) {
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
    return res.status(500).json({
      log: 'error on get a project'
    });
  }
});

module.exports = router;