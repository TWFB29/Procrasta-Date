const { Schema } = require('mongoose');

const musicSchema = new Schema({
    Title: {
        type: String,
        required: true
    },
    Artist: {
        type: String,
        required: true
    },
    Genre: {
        type: String
    }
});

module.exports = musicSchema;