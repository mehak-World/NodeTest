const express = require("express");
const app = express();
const port = 3000;

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test');

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));

app.get("/", (req, res) => {
    res.send("Hi there!");
});

app.listen(port, () => {
console.log("The server is running");
})