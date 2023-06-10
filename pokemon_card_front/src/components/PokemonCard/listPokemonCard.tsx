import PokemonCard from "./pokemonCard";
// se composant retourne une liste de pokemonCard en fonction de la liste de pokemon passé en paramètre chaque element de la liste sera le parametre de pokemonCard
const listPokemonCard = (props: any) => {
  console.log(props.listPokemon);

  return (
    <div className="pokemon-card--list">
      {props.listPokemon.map((pokemon: any) => {
        return (
          <PokemonCard
            key={pokemon.id}
            _idPokedex={pokemon._idPokedex}
            generation={pokemon.generation}
            name={pokemon.name}
            types={pokemon.types}
            stats={pokemon.stats}
          />
        );
      })}
    </div>
  );
};

export default listPokemonCard;
