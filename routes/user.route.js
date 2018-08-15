const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controller');

router.get('/', userController.root);

router.get('/kudos/:name', userController.kudos);

module.exports = router;