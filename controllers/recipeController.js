const express = require('express');

const Recipe = require('../db/models/recipeModel');

const router = express.Router();

//read
router.get('/', (req, res) => {
	Recipe.find({})
		.then((recipes) => {
			res.render('index', { recipes });
		})
		.catch(console.error);
});

//create
router.get('/new', (req, res) => {
	res.render('new');
});

router.post('/new', (req, res) => {
	console.log(req.body);
	let ingredients = req.body.ingredients.split(',');
	const recipeObject = {
		title: req.body.title,
		description: req.body.description,
		instructions: req.body.instructions,
		ingredients
	};
	console.log(recipeObject);
});
//view one

//update

//delete

module.exports = router;
