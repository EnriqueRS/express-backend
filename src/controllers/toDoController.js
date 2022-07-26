const toDoService = require('../services/toDoService');

const getAllToDos = (req, res) => {
    const allToDos = toDoService.getAllToDos();
    allToDos.then(todos => {
        res.send({ status: 'OK', data: todos });
    }).catch(err => {
        res.status(400).send({ status: 'ERROR', message: err.message});
    });
};

// async function getToDoById (req, res) {
const getToDoById = (req, res) => {
    try {
        const toDo = await toDoService.getToDoById(req.params.toDoId);
        console.log(toDo);
        res.send({ status: 'OK', data: toDo });
    } catch (err) {
        res.status(400).send({ status: 'ERROR', message: err.message});
    }
    
    
    // toDoService.getToDoById(req.params.toDoId).then(todo => {
    //     res.send({ status: 'OK', data: todo });
    // }).catch(err => {
    //     res.status(400).send({ status: 'ERROR', message: err.message});
    // });
}

const createToDo = (req, res) => {
    const { body } = req;
    toDoService.createToDo(body)
        .then(todo => {
            res.status(201).send({ status: 'OK', data: todo });
        }).catch(err => {
            res.status(400).send({ status: 'ERROR', message: err.message});
        });
}

const updateToDo = (req, res) => {
    const updatedToDo = toDoService.updateToDo();
    res.send("Update an existing ToDo");
}

const deleteToDo = (req, res) => {
    toDoService.deleteToDo();
    res.send("Delete an existing ToDo");
}

module.exports = {
    getAllToDos,
    getToDoById,
    createToDo,
    updateToDo,
    deleteToDo
}