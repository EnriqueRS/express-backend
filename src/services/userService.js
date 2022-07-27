var User = require('../model/User');

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
        request.title == null || 
        request.date == null || 
        request.done == null ) {
            throw new Error('Invalid request');
    }

    const newUser = {
        username: request.username,
        password: request.password,
        role: request.role
    };
    return await User.create(newUser);
}

async function update (userId, req) {
    let user = await getById(userId);
    if( req.password != user.password ) {
        user.password = req.password;
    }
    if( req.role != user.role ) {
        user.role = req.role;
    }
    return await User.updateOne({'idUser': user.id}, {$set: user});
}

async function deleteById (userId) {
    return await User.deleteOne({'idUser': userId});
}

module.exports = {
    getAll,
    getById,
    create,
    update,
    deleteById
}