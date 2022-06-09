const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port =5000;

app.use(cors());
app.use(express.json());

const uri = "mongodb://localhost:27017";
mongoose.connect(uri);
const db = mongoose.connection;
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const notesRouter = require('./routes/note');
app.use('/note',notesRouter)

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
