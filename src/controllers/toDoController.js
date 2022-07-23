const getAllToDos = (req, res) => {
    res.send("Get all ToDos");
};

const getToDoById = (req, res) => {
    res.send("Get an existing ToDo");
}

const createToDo = (req, res) => {
    res.send("Create a new ToDo");
}

const updateToDo = (req, res) => {
    res.send("Update an existing ToDo");
}

const deleteToDo = (req, res) => {
    res.send("Delete an existing ToDo");
}

module.exports = {
    getAllToDos,
    getToDoById,
    createToDo,
    updateToDo,
    deleteToDo
}