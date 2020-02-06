const Recipe = require('./models/recipeModel');

const seedData = require('./seeds.json');

Recipe.remove({})
	.then(() => Recipe.collection.insert(seedData))
	.then(() => {
		process.exit();
	});
