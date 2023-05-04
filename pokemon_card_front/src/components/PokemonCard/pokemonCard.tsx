import React from 'react';

import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import List from '@mui/material/List';

const PokemonCard = () =>  {
    return (
      <Card sx={{ 
        backgroundColor: "white",
        border: "solid 1px black",
        borderRadius: "10px"
        }}>
            <Typography>
                ID
            </Typography>
            <CardMedia 
            component="img"
            height="194"
            image=""
            />
            <Typography>
                Nom
            </Typography>
            <List>
              <CardMedia
              component="img"
              height="194"
              image=""
              />
              <CardMedia
              component="img"
              height="194"
              image=""
              />
            </List>
      </Card>
    );
  }

  export default PokemonCard;