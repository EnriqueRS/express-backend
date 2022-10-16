const mongoose = require('mongoose'),
    Schema = mongoose.Schema;
const AutoIncrement = require('mongoose-sequence')(mongoose);


var toDoSchema = new Schema({
    title: String,
    type: String,
    date: Date,
    state: String
});

toDoSchema.plugin(AutoIncrement, { inc_field: 'id' });

module.exports = mongoose.model('ToDo', toDoSchema);
