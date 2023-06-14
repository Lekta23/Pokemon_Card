// modele de données pour les utilisateurs

const mongoose = require('mongoose');

const tokenSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username: {
        type: String,
        required: true,
        unique: true,
        dropDups: true
    },
    token: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Token', tokenSchema);