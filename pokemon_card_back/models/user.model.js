// modele de données pour les utilisateurs

const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    email: { type: String, required: true, unique: true, dropDups: true },
    password: { type: String, required: true }
});

module.exports = mongoose.model('User', userSchema);

