interface IPokemon {
    id_Pokedex : number;
    generation: number;
    name : string;
    types : Array<string>;
    stats : Array<number>;
}

export default IPokemon;
