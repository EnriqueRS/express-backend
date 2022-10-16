var ToDo = require('../model/ToDo');

async function getAll () {
    return await ToDo.find({});
}

async function getById (toDoId) {
    const toDo = await ToDo.findOne({ 'id': toDoId });
    if (toDo == null) {
        throw new Error('ToDo not found');
    }
    return toDo;
}

async function create (request) {
    if (request == null ||
        request.title == null ||
        request.type == null ||
        request.date == null ||
        request.state == null) {
        throw new Error('Invalid request');
    }

    const newToDo = {
        title: request.title,
        type: request.type,
        date: request.date,
        state: request.state
    };
    return await ToDo.create(newToDo);
}

async function update (toDoId, req) {
    let toDo = await getById(toDoId);
    if (req.title !== toDo.title) {
        toDo.title = req.title;
    }
    if (req.type !== toDo.type) {
        toDo.type = req.type;
    }
    if (req.date !== toDo.date) {
        toDo.date = req.date;
    }
    if (req.state !== toDo.state) {
        toDo.state = req.state;
    }
    return await ToDo.updateOne({ 'id': toDo.id }, { $set: toDo });
}

async function deleteById (toDoId) {
    return await ToDo.deleteOne({ 'id': toDoId });
}

module.exports = {
    getAll,
    getById,
    create,
    update,
    deleteById
}