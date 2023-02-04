const sendResponse = require('../api/sendResponse');
const tagService = require('../services/tagService');

const getAll = (req, res) => {
    const all = tagService.getAll();
    all.then(items => {
        sendResponse(res, 200, items);
    }).catch(err => {
        sendResponse(res, 400, err.message);
    });
}

module.exports = {
    getAll
}