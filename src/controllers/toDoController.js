const sendResponse = require('../api/sendResponse');
const toDoService = require('../services/toDoService');

const getAll = (req, res) => {
    const all = toDoService.getAll();
    all.then(items => {
        sendResponse(res, 200, items);
    }).catch(err => {
        sendResponse(res, 400, err.message);
    });
};

const getById = (req, res) => {    
    toDoService.getById(req.params.id).then(item => {
        sendResponse(res, 200, item);
    }).catch(err => {
        sendResponse(res, 400, err.message);
    });
}

const create = (req, res) => {
    const { body } = req;
    toDoService.create(body)
        .then(item => {
            sendResponse(res, 201, item);
        }).catch(err => {
            sendResponse(res, 400, err.message);
        });
}

const update = (req, res) => {
    toDoService.update(req.params.id, req.body).then(item => {
        sendResponse(res, 200, item);
    }).catch(err => {
        sendResponse(res, 400, err.message);
    });
}

const deleteById = (req, res) => {
    toDoService.deleteById(req.params.toDoId).then(item => {
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