var express = require('express');
var router = express.Router();

var projectControllers = require('../../controllers/project.controllers');

router.get('/', projectControllers.getProjects);
router.post('/',projectControllers.createProject);

module.exports = router;