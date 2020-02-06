const express = require('express');

const Recipe = require('../db/models/recipeModel');

const router = express.Router();

router.get('/', (req, res) => {
	res.send('<h1>Testing response for /</h1>');
});

module.exports = router;
