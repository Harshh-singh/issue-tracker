const express = require('express');
const router = express.Router();

//import our tasks
const homepage = require('../controllers/homepage_controller');

console.log('router loaded');


router.get('/', homepage.home);

module.exports = router;

