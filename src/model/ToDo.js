const mongoose = require('mongoose'),
Schema = mongoose.Schema;


var toDoSchema = new Schema({
    title: String,
    date: Date,
    done: Boolean
});

module.exports = mongoose.model('ToDo', toDoSchema);
