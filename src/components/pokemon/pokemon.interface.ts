export interface IPokemonWeight {
  minimum: string;
  maximum: string;
}

export interface IPokemonHeight {
  minimum: string;
  maximum: string;
}
export interface IPokemon {
  id: string;
  number: string;
  name: string;
  weight: IPokemonWeight;
  height: IPokemonHeight;
  classification: string;
  types: string[];
  resistant: string[];
  weaknesses: string[];
  fleeRate: number;
  maxCP: number;
  maxHP: number;
  image: string;
}
export interface IPokemonList {
  pokemons: IPokemon[];
}

export interface IFastAttack {
  name: string;
  type: string;
  damage: string;
}

export interface ISpecialAttack {
  name: string;
  type: string;
  damage: string;
}

export interface IPokemonAttacks {
  fast: IFastAttack[];
  special: ISpecialAttack[];
}
export interface IPokemonAttack {
  attacks: IPokemonAttacks;
}
