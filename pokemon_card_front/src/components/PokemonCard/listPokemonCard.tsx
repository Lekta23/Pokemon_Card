import PokemonCard from "./pokemonCard";
import "./listPokemonCardStyle.css";
const listPokemonCard = (props: any) => {
  console.log(props.listPokemon);

  const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const button: HTMLButtonElement = event.currentTarget;
    console.log(button.value);
  };

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
            onClick={buttonHandler}
          />
        );
      })}
    </div>
  );
};

export default listPokemonCard;
