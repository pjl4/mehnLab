const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/recipe');

module.exports = mongoose;
