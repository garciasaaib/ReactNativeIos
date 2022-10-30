import {PokemonTypeColor} from './constants';

// aqui decimos que el valor de type en la funcion es de tipo key del enum PokemonTypeColor
type PokemonType = keyof typeof PokemonTypeColor;

export default function getColotByType(type: PokemonType = 'normal'): string {
  return PokemonTypeColor[type];
}
