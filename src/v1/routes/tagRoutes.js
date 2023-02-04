const express = require('express');
const router = express.Router();
const tagController = require('../../controllers/tagController.js');

router.get('/', tagController.getAll);

module.exports = router;