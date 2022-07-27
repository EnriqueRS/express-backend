const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AutoIncrement = require('mongoose-sequence')(mongoose);


var userSchema = new Schema({
    username: String,
    password: String,
    role: String
});

userSchema.plugin(AutoIncrement, {inc_field: 'idUser'});

module.exports = mongoose.model('User', userSchema);