const express = require('express');

const authController = require('../controllers/auth.controller');
// importing ,int order to use fun inside above js file in this js file .

const router = express.Router();

router.get('/signup', authController.getSignup);

router.post('/signup', authController.signup);

router.get('/login', authController.getLogin);

router.post('/login', authController.login);

router.post('/logout', authController.logout);

module.exports = router;  