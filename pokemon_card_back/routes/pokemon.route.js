const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Pokemon = require('../models/pokemon.model');
const PokemonService = require('../services/pokemon.service');

router.get('/', async (req, res) => {
    const pokemons = await PokemonService.getAllPokemons();
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
        type: req.body.type,
        stats: req.body.stats
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