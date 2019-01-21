const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	category: {
		type: String,
		required: true
	},
	image: {
		type: String,
		required: true
	},
	recipe: [
		{
			user: {
				type: Schema.Types.ObjectId,
				ref: 'users'
			},
			recipeTitle: {
				type: String,
				required: true
			},
			recipeCategory: {
				type: String,
				required: true
			},
			recipeImage: {
				type: String,
				required: true
			},
			recipeDetail: [
				{
					recipeDetailImage: [
						{
							image: {
								type: String
							}
						}
					],
					recipeDetailDescription: {
						type: String
					},
					recipeDetailIngredients: [
						{
							ingredient: {
								type: String
							}
						}
					],
					recipeDetailInstructions: {
						type: String
					},
					recipeDetailNotes: {
						type: String
					}
				}
			]
		}
	]
});

module.exports = Recipe = mongoose.model('recipe', RecipeSchema);
