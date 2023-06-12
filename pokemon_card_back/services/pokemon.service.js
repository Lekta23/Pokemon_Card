const Pokemon = require('../models/pokemon.model');
const admin = require('../firebase').admin;

class PokemonService {


    async getAllPokemons(idUser) {
        try {
            return admin.firestore().collection('pokemons').where('idUser', '==', idUser).get().then((querySnapshot) => {
                let pokemons = [];
                querySnapshot.forEach((doc) => {
                    pokemons.push({
                        id: doc.id,
                        _idPokedex: doc.data()._idPokedex,
                        generation: doc.data().generation,
                        name: doc.data().name,
                        types: doc.data().types,
                        stats: doc.data().stats,
                    });
                });
                return pokemons;
            });
        } catch (error) {
            console.log(error);
        }
    }

    async getPokemonById(id, idUser) {
        try {
            return admin.firestore().collection('pokemons').doc(id).where('idUser', '==', idUser).get().then((doc) => {
                return {
                    id: doc.id,
                    _idPokedex: doc.data()._idPokedex,
                    generation: doc.data().generation,
                    name: doc.data().name,
                    types: doc.data().types,
                    stats: doc.data().stats,

                };
            });
        } catch (error) {
            console.log(error);
        }
    }

    async createPokemon(pokemon) {
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