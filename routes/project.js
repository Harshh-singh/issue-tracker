const express = require('express');
const router = express.Router();

const projectcontroller = require('../controllers/project_controller');

router.get('/create', projectcontroller.create);

router.post('/newproject', projectcontroller.newproject);



module.exports = router;
