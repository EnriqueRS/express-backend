const express = require('express');
const bodyParser = require('body-parser');
const { default: mongoose } = require('mongoose');
const v1ToDoRouter = require('./v1/routes/toDoRoutes');

const app = express();
require('dotenv').config();
const port = process.env.PORT || 3000
const API_VERSION = process.env.API_VERSION || 'v1'

app.use(function (req, res, next) {
    next();
});

app.use(bodyParser.json());
app.use("/api/v1/todo", v1ToDoRouter);

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
