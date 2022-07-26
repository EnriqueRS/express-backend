var ToDo = require('../model/ToDo');

const getAllToDos = () => {
    return ToDo.find({});
}

// const getToDoById = (toDoId) => {
async function getToDoById (toDoId) {
    return await ToDo.findById(toDoId);

    // ToDo.findOne({'id': toDoId}).then(todo => {
    //     console.log('service');
    //     console.log(todo);
    //     return todo;
    // }).catch(err => {
    //     throw new Error(err);
    // });

    // return ToDo.findOne({'id': toDoId});
}

async function createToDo (request) {
    if( request == null ||
        request.title == null || 
        request.date == null || 
        request.done == null ) {
            throw new Error('Invalid request');
    }

    const newToDo = {
        title: request.title,
        date: request.date,
        done: request.done
    };
    return await ToDo.create(newToDo);
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