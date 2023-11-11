//require express
const express = require('express');

//start express on port 3000
const app = express();
const port = 3000;

//require mongoose
const mongoose = require('mongoose');

//connect to mongodb
mongoose.connect('mongodb://127.0.0.1:27017/SWEAR-local');

// // check if connection works
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});