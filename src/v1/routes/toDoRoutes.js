const express = require('express');
const router = express.Router();
const toDoController = require('../../controllers/toDoController');

router.get('/', toDoController.getAll);

router.get('/:id', toDoController.getById);

router.post('/', toDoController.create);

router.patch('/:id', toDoController.update);

router.delete('/:id', toDoController.deleteById);

module.exports = router;