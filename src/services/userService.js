const User = require('../model/User');
const auth = require('../middleware/auth');

async function getAll () {
    return await User.find({});
}

async function getById (userId) {
    const user = await User.findOne({'idUser': userId});
    if( user == null ) {
        throw new Error('User not found');
    }
    return user;
}

async function create (request) {
    if( request == null ||
        request.username == null || 
        request.password == null || 
        request.role == null ) {
            throw new Error('Invalid request');
    }
    const user = await User.findOne({'username': request.username});
    if (user) {
        throw new Error('Username alredy exists');
    }

    const newUser = {
        username: request.username,
        password: auth.getPasswordHash(request.password),
        role: request.role
    };
    return await User.create(newUser);
}

async function update (userId, req) {
    let user = await getById(userId);
    if( auth.getPasswordHash(req.password) != user.password ) {
        user.password = auth.getPasswordHash(req.password);
    }
    if( req.role != user.role ) {
        user.role = req.role;
    }
    return await User.updateOne({'idUser': user.id}, {$set: user});
}

async function deleteById (userId) {
    return await User.deleteOne({'idUser': userId});
}

async function getUser (username) {
    return await User.findOne({
        'username': username});
}

module.exports = {
    getAll,
    getById,
    create,
    update,
    deleteById,
    getUser
}