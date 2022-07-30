const User = require('../model/User');
const Auth = require('../utils/auth');

async function getAccessToken (username, password) {
    const user = await getUser(username, password);

    if (user) {
        const accessToken = Auth.getAccessToken(user);
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