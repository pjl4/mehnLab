const express = require('express');
const app = express();
const recipeController = require('./controllers/recipeController');

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//set view engine
app.set('view engine', 'hbs');

const methodOverride = require ("method-override")
app.use(methodOverride("_method"))
//on the home route use our recipeController
app.use('/', recipeController);

app.listen(4000, () => {
	console.log('app running on port 4000');
});
