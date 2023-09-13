const mongoose = require('mongoose');

const url = "mongodb+srv://ny8888411:1234@cluster0.jxtohzy.mongodb.net/devblogs?retryWrites=true&w=majority";

// asynchrounous function - returns a promise
mongoose.connect(url)
.then((result) => {
    console.log('database connected');
})
.catch((err) => {
    console.log(err);
});

module.exports = mongoose;