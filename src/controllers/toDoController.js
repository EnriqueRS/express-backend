const sendResponse = require('../utils/sendResponse');
const toDoService = require('../services/toDoService');

const getAllToDos = (req, res) => {
    const allToDos = toDoService.getAllToDos();
    allToDos.then(todos => {
        sendResponse(res, 200, todos);
    }).catch(err => {
        sendResponse(res, 400, err.message);
    });
};

const getToDoById = (req, res) => {    
    toDoService.getToDoById(req.params.toDoId).then(todo => {
        sendResponse(res, 200, todo);
    }).catch(err => {
        sendResponse(res, 400, err.message);
    });
}

const createToDo = (req, res) => {
    const { body } = req;
    toDoService.createToDo(body)
        .then(todo => {
            sendResponse(res, 201, todo);
        }).catch(err => {
            sendResponse(res, 400, err.message);
        });
}

const updateToDo = (req, res) => {
    toDoService.updateToDo(req.params.toDoId, req.body).then(todo => {
        sendResponse(res, 200, todo);
    }).catch(err => {
        sendResponse(res, 400, err.message);
    });
}

const deleteToDo = (req, res) => {
    toDoService.deleteToDo(req.params.toDoId).then(todo => {
        sendResponse(res, 200, todo);
    }).catch(err => {
        sendResponse(res, 400, err.message);
    });
}

module.exports = {
    getAllToDos,
    getToDoById,
    createToDo,
    updateToDo,
    deleteToDo
}