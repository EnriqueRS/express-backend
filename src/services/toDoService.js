var ToDo = require('../model/ToDo');

const getAllToDos = () => {
    const allToDos = ToDo.find({});
    return allToDos;
}

const getToDoById = () => {
    return;
}

const createToDo = () => {
    return;
}

const updateToDo = () => {
    return;
}

const deleteToDo = () => {
    return;
}

module.exports = {
    getAllToDos,
    getToDoById,
    createToDo,
    updateToDo,
    deleteToDo
}