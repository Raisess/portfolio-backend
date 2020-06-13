const router = require('express').Router();
// project controller
const { create, update } = require('../controllers/project.controller');

// create project route
/**
* @param {
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
* @param {
*  name,
*  description,
*  cover,
*  link,
*  git,
*  color
* }
*/
router.put('/update', (req, res) => {
  try {
    if (update(req.body)) {
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

module.exports = router;