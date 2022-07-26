const jwt = require('jsonwebtoken');
const User = require('../model/User');

async function getAccessToken (username, password) {
    const user = await getUser(username, password);

    if (user) {
        const accessToken = jwt.sign(
            { 
                username: user.username, 
                password: user.password,
                role: user.role 
            }, process.env.JWT_SECRET, { expiresIn: '6h' });
        return accessToken;
    } else {
        throw new Error('Invalid username or password');
    }
}

async function getUser (username, password) {
    return await User.findOne({
        'username': username,
        'password': password});
}

module.exports = {
    getAccessToken,
    getUser
}