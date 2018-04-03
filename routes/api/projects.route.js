var express = require('express');
var router = express.Router();

var projectControllers = require('../../controllers/project.controllers');

router.get('/', projectControllers.getProjects);
router.post('/',projectControllers.createProject);
router.get('/current',projectControllers.getValidProjects);

module.exports = router;