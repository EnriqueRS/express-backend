const express = require('express');
const router = express.Router();
const userController = require('../../controllers/crudController');
const userService = require('../../services/userService');
userController.setService(userService);


router.get('/', userController.getAll);

router.get('/:id', userController.getById);

router.post('/', userController.create);

router.patch('/:id', userController.update);

router.delete('/:id', userController.deleteById);

module.exports = router;