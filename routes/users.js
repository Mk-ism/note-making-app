const express = require('express');
const jsonParser = require('body-parser').json();
const userController = require('../controllers/usersController');

const router = express.Router();

router.post('/signup', userController.signUp);
router.post('/login', jsonParser, userController.login);

module.exports = router;