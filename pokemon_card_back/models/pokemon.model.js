const mongoose = require('mongoose');

const pokemonSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    _idPokedex: {
        type: Number,
        required: true
    },
    generation: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    // type de type Array de string
    types: {
        type: Object,
        required: true
    },
    stats: {
        type: Object,
        required: true
    },
});

module.exports = mongoose.model('Pokemon', pokemonSchema);