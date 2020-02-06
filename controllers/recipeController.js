const express = require('express');

const Recipe = require('../db/models/recipeModel');

const router = express.Router();

router.get('/', (req, res) => {
	Recipe.find({}).then(recipes => {
		res.render ('index',{recipes})

	}).catch (console.error);
});

module.exports = router;
