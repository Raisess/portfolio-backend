const router = require('express').Router();
// project controller
const { create } = require('../controllers/project.controller');

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
        bool: true
      });
    } else {
      return res.status(503).json({
        log: 'project failed, retry request',
        bool: false
      });
    }
  } catch (error) {
    return res.status(500).json({
      log: 'error in project creation'
    });
  }
});

module.exports = router;