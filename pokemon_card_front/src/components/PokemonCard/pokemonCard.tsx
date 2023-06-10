import React from 'react';

import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

import './pokemonCardStyle.css';

const PokemonCard = () => {
  const pokeData = {
    "pokedexId": 25,
    "generation": 1,
    "name": {
      "fr": "Pikachu",
      "en": "Pikachu(en)"
    },
    "sprites": {
      "regular": "https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/sprites/25/regular.png",
    },
    "types": [
      {
        "name": "Électrik",
        "image": "https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/types/electrik.png"
      },
      {
        "name": "Eau",
        "image": "https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/types/eau.png"
      },
    ],
    "stats": {
      "hp": 45,
      "atk": 80,
      "def": 50,
      "spe_atk": 75,
      "spe_def": 60,
      "vit": 120
    }
  }
  
  return (
    <Card className='pokemon-card'>
      <div className='pokemon-card--header'>
        <Typography>
          ID : {pokeData['pokedexId']}
        </Typography>

        <Typography>
          Gen : {pokeData['generation']}
        </Typography>
      </div>

      <Typography className='center'>
        {pokeData['name']['fr']} ({pokeData['name']['en']})
      </Typography>

      <div className='pokemon-card--sprite'>
        <CardMedia
          component="img"
          image={pokeData['sprites']['regular']}
        />
      </div>

      <div className='center'>
        <div className='pokemon-card--type'>
          <CardMedia
            className='pokemon-card--type-image'
            component="img"
            image={pokeData['types'][0]['image']}
          />
          
          <Typography>
            {pokeData['types'][0]['name']}
          </Typography>
        </div>

        <div className='pokemon-card--type'>
          <CardMedia
            className='pokemon-card--type-image'
            component="img"
            image={pokeData['types'][1]['image']}
          />

          <Typography>
            {pokeData['types'][1]['name']}
          </Typography>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;