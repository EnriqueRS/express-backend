const express = require('express');
const router = express.Router();
const toDoController = require('../../controllers/toDoController');

router.get("/", toDoController.getAllToDos);

router.get("/:toDoId", toDoController.getToDoById);

router.post("/", toDoController.createToDo);

router.patch("/:toDoId", toDoController.updateToDo);

router.delete("/:toDoId", toDoController.deleteToDo);

module.exports = router;