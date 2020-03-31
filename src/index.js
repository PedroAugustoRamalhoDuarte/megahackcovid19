const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require("./routes");

const app = express();

mongoose.connect('mongodb+srv://admin:1234@cluster0-h8oju.mongodb.net/test',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);