const mongoose = require('../connection');

const RecipeSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	instructions: {
		type: String,
		required: true
	},
	ingredients: {
		type: Array,
		required: true
	}
});

const Recipe = mongoose.model('Recipe', RecipeSchema);

module.exports = Recipe;
