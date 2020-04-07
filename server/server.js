const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const cors = require('cors');

const users = require("./routes/user");
const drug = require('./routes/drug');
const email = require('./routes/email');
const appointments = require("./routes/appointmentRoutes")
const app = express();

// Bodyparser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

// Cors
app.use(cors());

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes
app.use("/users", users);
app.use("/drug", drug);
app.use("/emails", email);
app.use("", appointments);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server up and running on port ${port} !`));
