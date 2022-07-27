const express = require('express');
const router = express.Router();
// const toDoController = require('../../controllers/crudController');
const toDoController = require('../../controllers/crudController');
const toDoService = require('../../services/toDoService');
toDoController.setService(toDoService);

router.get('/', toDoController.getAll);

router.get('/:id', toDoController.getById);

router.post('/', toDoController.create);

router.patch('/:id', toDoController.update);

router.delete('/:id', toDoController.deleteById);

module.exports = router;