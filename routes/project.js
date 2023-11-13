const express = require('express');
const router = express.Router();

const projectcontroller = require('../controllers/project_controller');

router.get('/create', projectcontroller.create);

router.post('/newproject', projectcontroller.newproject);

router.get('/details' , projectcontroller.details);

router.get('/createissue', projectcontroller.createissue);

router.post('/newbug', projectcontroller.newIssue);


module.exports = router;
