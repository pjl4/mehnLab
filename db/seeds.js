const Recipe = require('./models/recipeModel');

const seedData = require('./seeds.json');

Recipe.remove({})
	.then(() => { 
		console.log("inserting data")
		Recipe.collection.insert(seedData)})
	.then(() => {
		process.exit();
	});
