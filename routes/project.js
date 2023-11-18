const express = require('express');
const router = express.Router();

const projectcontroller = require('../controllers/project_controller');

//this is to get create project page
router.get('/create', projectcontroller.create);

//this is for creating new project
router.post('/newproject', projectcontroller.newproject);

//this is to get project details page
router.get('/details' , projectcontroller.details);

//this is to get create issue page
router.get('/createissue', projectcontroller.createissue);

//this is for creating new issue
router.post('/newbug', projectcontroller.newIssue);

//this is for deleting project and its related issues from database
router.get('/deleteproject', projectcontroller.deleteproject);


module.exports = router;
