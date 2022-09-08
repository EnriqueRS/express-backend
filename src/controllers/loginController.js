const sendResponse = require('../api/sendResponse');
const loginService = require('../services/loginService');

const login = (req, res) => {
    const { username, password } = req.body;

    const accessToken = loginService.getAccessToken(username, password)
    .then(token => {
        sendResponse(res, 200, token);
    }).catch(err => {
        sendResponse(res, 400, err.message);
    });
};

module.exports = {
    login
}