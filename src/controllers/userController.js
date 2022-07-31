const sendResponse = require('../utils/sendResponse');
const userService = require('../services/userService');

const getAll = (req, res) => {
    const all = userService.getAll();
    all.then(items => {
        sendResponse(res, 200, items);
    }).catch(err => {
        sendResponse(res, 400, err.message);
    });
};

const getById = (req, res) => {    
    userService.getById(req.params.id).then(item => {
        sendResponse(res, 200, item);
    }).catch(err => {
        sendResponse(res, 400, err.message);
    });
}

const create = (req, res) => {
    const { body } = req;
    userService.create(body)
        .then(item => {
            sendResponse(res, 201, item);
        }).catch(err => {
            sendResponse(res, 400, err.message);
        });
}

const update = (req, res) => {
    userService.update(req.params.id, req.body).then(item => {
        sendResponse(res, 200, item);
    }).catch(err => {
        sendResponse(res, 400, err.message);
    });
}

const deleteById = (req, res) => {
    userService.deleteById(req.params.toDoId).then(item => {
        sendResponse(res, 200, item);
    }).catch(err => {
        sendResponse(res, 400, err.message);
    });
}

module.exports = {
    getAll,
    getById,
    create,
    update,
    deleteById
}