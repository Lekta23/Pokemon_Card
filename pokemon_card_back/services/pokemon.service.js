const Pokemon = require('../models/pokemon.model');
const admin = require('../firebase').admin;

class PokemonService {

    async  getAllPokemons() {
        try {
            return admin.firestore().collection('pokemons').get().then((snapshot) => {
                return snapshot.docs.map(doc => {
                    return {
                        id: doc.id,
                        _idPokedex: doc.data()._idPokedex,
                        generation: doc.data().generation,
                        name: doc.data().name,
                        type: doc.data().type,
                        stats: doc.data().stats
                    };
                });
            });
        } catch (error) {
            console.log(error);
        }
    }

    async  getPokemonById(id) {
        try {
            return admin.firestore().collection('pokemons').doc(id).get().then((doc) => {
                if (doc.exists) {
                    return {
                        id: doc.id,
                        _idPokedex: doc.data()._idPokedex,
                        generation: doc.data().generation,
                        name: doc.data().name,
                        type: doc.data().type,
                        stats: doc.data().stats
                    };
                } else {
                    return null;
                }
            });
        } catch (error) {
            console.log(error);
        }
    }

    async  createPokemon(pokemon) {
        console.log(pokemon);
        try {
            return admin.firestore().collection('pokemons').add(JSON.parse(JSON.stringify(pokemon))).then((doc) => {
                return doc.id;
            });
        } catch (error) {
            console.log(error);
        }
    }

    async updatePokemon(id, pokemon) {
        try {
            return admin.firestore().collection('pokemons').doc(id).update(JSON.parse(JSON.stringify(pokemon))).then(() => {
                return id;
            });
        } catch (error) {
            console.log(error);
        }
    }

    async deletePokemon(id) {
        try {
            return admin.firestore().collection('pokemons').doc(id).delete().then(() => {
                return id;
            });
        } catch (error) {
            console.log(error);
        }
    }

}

module.exports = new PokemonService();