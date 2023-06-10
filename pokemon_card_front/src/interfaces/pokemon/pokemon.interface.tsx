interface IPokemon {
  _idPokedex: number;
  generation: number;
  name: string;
  types: Array<string>;
  stats: Array<number>;
}

export default IPokemon;
