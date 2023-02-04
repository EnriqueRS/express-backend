const ToDoType = require('../model/ToDoTypes')

async function getAll () {
    console.log(ToDoType)
    return Object.values(ToDoType)
}

module.exports = {
    getAll
}