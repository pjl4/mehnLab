const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/recipe', function(error){
    if (error) console.log(error);
    console.log("connection is good")
});


module.exports = mongoose;
