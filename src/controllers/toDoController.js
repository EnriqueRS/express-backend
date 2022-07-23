const toDoService = require('../services/toDoService');

const getAllToDos = (req, res) => {
    const allToDos = toDoService.getAllToDos();
    res.send("Get all ToDos");
};

const getToDoById = (req, res) => {
    const toDo = toDoService.getToDoById();
    res.send("Get an existing ToDo");
}

const createToDo = (req, res) => {
    const newToDo = toDoService.createToDo();
    res.send("Create a new ToDo");
}

const updateToDo = (req, res) => {
    const updatedToDo = toDoService.updateToDo();
    res.send("Update an existing ToDo");
}

const deleteToDo = (req, res) => {
    toDoService.deleteToDo();
    res.send("Delete an existing ToDo");
}

module.exports = {
    getAllToDos,
    getToDoById,
    createToDo,
    updateToDo,
    deleteToDo
}