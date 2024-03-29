const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { default: mongoose } = require('mongoose');

const API_VERSION = process.env.API_VERSION || 'v1'
const authRequired = require('./middleware/authRequired');
const toDoRouter = require(`./${API_VERSION}/routes/toDoRoutes`);
const loginRouter = require(`./${API_VERSION}/routes/loginRoutes`);
const userRouter = require(`./${API_VERSION}/routes/userRoutes`);
const tagRouter = require(`./${API_VERSION}/routes/tagRoutes`)

const app = express();
require('dotenv').config();
const port = process.env.PORT || 3000

app.use(cors());
app.use(function (req, res, next) {
    next();
});

app.use(bodyParser.json())
app.use(`/api/${API_VERSION}/todo`, authRequired, toDoRouter);
app.use(`/api/${API_VERSION}/login`, loginRouter);
app.use(`/api/${API_VERSION}/user`, userRouter);
app.use(`/api/${API_VERSION}/tag`, tagRouter)

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
