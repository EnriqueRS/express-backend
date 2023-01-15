const express = require('express');
const router = express.Router();
const userController = require('../../controllers/userController');
const authRequired = require('../../middleware/authRequired');


router.get('/', authRequired, userController.getAll);

router.get('/:id', authRequired, userController.getById);

router.post('/', userController.create);

router.patch('/:id', authRequired, userController.update);

router.delete('/:id', authRequired, userController.deleteById);

module.exports = router;