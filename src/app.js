const express = require('express');
const v1ToDoRouter = require('./v1/routes/toDoRoutes');

const app = express();
require('dotenv').config();
const port = process.env.PORT || 3000
const API_VERSION = process.env.API_VERSION || 'v1'

app.use(function (req, res, next) {
    next();
});

app.use("/api/v1/todo", v1ToDoRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
