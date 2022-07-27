const sendResponse = require('../utils/sendResponse');
let crudService = null;

function setService(service) {
    crudService = service;
}

const getAll = (req, res) => {
    const all = crudService.getAll();
    all.then(items => {
        sendResponse(res, 200, items);
    }).catch(err => {
        sendResponse(res, 400, err.message);
    });
};

const getById = (req, res) => {    
    crudService.getById(req.params.id).then(item => {
        sendResponse(res, 200, item);
    }).catch(err => {
        sendResponse(res, 400, err.message);
    });
}

const create = (req, res) => {
    const { body } = req;
    crudService.create(body)
        .then(item => {
            sendResponse(res, 201, item);
        }).catch(err => {
            sendResponse(res, 400, err.message);
        });
}

const update = (req, res) => {
    crudService.update(req.params.id, req.body).then(item => {
        sendResponse(res, 200, item);
    }).catch(err => {
        sendResponse(res, 400, err.message);
    });
}

const deleteById = (req, res) => {
    crudService.deleteById(req.params.toDoId).then(item => {
        sendResponse(res, 200, item);
    }).catch(err => {
        sendResponse(res, 400, err.message);
    });
}

module.exports = {
    setService,
    getAll,
    getById,
    create,
    update,
    deleteById
}