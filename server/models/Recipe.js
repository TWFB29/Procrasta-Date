const { Schema } = require('mongoose');

const recipeSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    ingredients: [
        {
            name: String,
            quantity: String
        }
    ],
    instructions: [
        {
            steps: String
        }
    ]
});

module.exports = recipeSchema;