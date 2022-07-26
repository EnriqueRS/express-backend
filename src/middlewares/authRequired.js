const jwt = require('jsonwebtoken');
const sendResponse = require('../api/sendResponse');

const verifyToken = (req, res, next) => {
    const bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        try {
            jwt.verify(bearerToken, process.env.JWT_SECRET);
            req.user = jwt.decode(bearerToken);
            next();
        } catch (err) {
            sendResponse(res, 401, 'Unauthorized', err);
        }
    } else {
        sendResponse(res, 401, 'Unauthorized');
    }
}

module.exports = verifyToken;