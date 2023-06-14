interface IPokemon {
  _id: any;
  _idPokedex: number;
  generation: number;
  name: string;
  types: Array<string>;
  stats: {
    hp: number;
    attack: number;
    defense: number;
    specialAttack: number;
    specialDefense: number;
    speed: number;
  };
}

export default IPokemon;
