const auth = require('../utils/auth');
const userService = require('../services/userService');

async function getAccessToken (username, password) {
    const user = await userService.getUser(username);
    if (user && auth.comparePassword(password, user.password)) {
        return auth.getAccessToken(user);
    } else {
        throw new Error('Invalid username or password');
    }
}

module.exports = {
    getAccessToken
}