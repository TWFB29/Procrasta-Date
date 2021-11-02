const { Schema, model } = require('mongoose');
const recipeSchema = require('./Recipe');
const musicSchema = require('./Music')

// date error
const dateSchema = new Schema({
    datename: {
        type: String,
        required: true,
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },

    // username: [{
    //     type: Schema.Types.ObjectId,
    //     ref: 'User'
    // }],
    // recipes: [{
    //     type: Schema.Types.ObjectId,
    //     ref: 'Recipe'
    // }],
    // or would this be better
    recipes: [recipeSchema],
    // music: [{
    //     type: Schema.Types.ObjectId,
    //     ref: 'Music'
    // }]
    music: [musicSchema]

});

const MyDate = model('Date', dateSchema);

module.exports = MyDate;