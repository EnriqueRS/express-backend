var ToDo = require('../model/ToDo');

async function getAllToDos () {
    return await ToDo.find({});
}

async function getToDoById (toDoId) {
    const toDo = await ToDo.findOne({'id': toDoId});
    if( toDo == null ) {
        throw new Error('ToDo not found');
    }
    return toDo;
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

async function updateToDo (toDoId, req) {
    let toDo = await getToDoById(toDoId);
    if( req.title != toDo.title ) {
        toDo.title = req.title;
    }
    if( req.date != toDo.date ) {
        toDo.date = req.date;
    }
    if( req.done != toDo.done ) {
        toDo.done = req.done;
    }
    return await ToDo.updateOne({'id': toDo.id}, {$set: toDo});
}

async function deleteToDo (toDoId) {
    return await ToDo.deleteOne({'id': toDoId});
}

module.exports = {
    getAllToDos,
    getToDoById,
    createToDo,
    updateToDo,
    deleteToDo
}