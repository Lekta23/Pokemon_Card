const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Pokemon = require('../models/pokemon.model');
const PokemonService = require('../services/pokemon.service');
const UserService = require('../services/user.service');

router.get('/', async (req, res) => {
    const token = req.headers.authorization.split(' ')[1];
    const idUser = await UserService.getUserId(token);
    const pokemons = await PokemonService.getAllPokemons(idUser);
    res.json(pokemons);
});

router.get('/:id', async (req, res) => {
    const pokemon = await PokemonService.getPokemonById(req.params.id);
    res.json(pokemon);
});

router.post('/', async (req, res) => {
    const pokemon = new Pokemon({
        _idPokedex: req.body._idPokedex,
        generation: req.body.generation,
        name: req.body.name,
        types: req.body.types,
        stats: req.body.stats,
        idUser: req.body.idUser
    });
    const newPokemon = await PokemonService.createPokemon(pokemon);
    res.json(newPokemon);

});

router.put('/:id', async (req, res) => {
    const id = req.params.id;
    const pokemon = req.body;
    const updatedPokemon = await PokemonService.updatePokemon(id, pokemon);
    res.json(updatedPokemon);

});

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    const deletedPokemon = await PokemonService.deletePokemon(id);
    res.json(deletedPokemon);

});

module.exports = router;