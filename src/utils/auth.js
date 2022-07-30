const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


function getAccessToken(user) {
return jwt.sign(
    { 
        username: user.username, 
        role: user.role 
    }, process.env.JWT_SECRET, { expiresIn: '6h' });
}

function getPasswordHash(password) {
    return bcrypt.hashSync(password, 10);
}

function comparePassword(password, hash) {
    return bcrypt.compareSync(password, hash);
}

module.exports = {
    getAccessToken,
    getPasswordHash,
    comparePassword
}