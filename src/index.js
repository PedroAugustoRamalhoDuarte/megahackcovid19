const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require("./routes");
const bodyParser = require('body-parser');

const app = express();

const drug = require('./routes/drugRouter');

// ---- DB Pedro -----
// mongoose.connect('mongodb+srv://admin:1234@cluster0-h8oju.mongodb.net/test',{
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });

// ---- DB Igor ----
mongoose.connect('mongodb+srv://igor:zaZarzuk7p5UiThX@cluster0-v1q4i.mongodb.net/hack?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});


app.use(cors());
app.use(express.json());
app.use(routes);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/drugs', drug);

let port = 3333;
app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});