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
	let ingredients = req.body.ingredients.split(',');
	const recipeObject = {
		title: req.body.title,
		description: req.body.description,
		instructions: req.body.instructions,
		ingredients
	};
	Recipe.create(recipeObject)
		.then((recipe) => {
			res.redirect('/');
		})
		.catch(console.error);
});
//view one
router.get('/:id',(req,res) => {
	Recipe.findById(req.params.id).then(recipe => {
		res.render("show",recipe);
	}).catch(console.error)})
//update

//delete

module.exports = router;
