const jwt = require('jsonwebtoken');


function getAccessToken(user) {
return jwt.sign(
    { 
        username: user.username, 
        role: user.role 
    }, process.env.JWT_SECRET, { expiresIn: '6h' });
}

module.exports = {
    getAccessToken
}