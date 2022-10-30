import {useEffect, useState} from 'react';
import pokeApi from '../api/pokemonDB';
import {PokemonDetailResponse, Species, Stat} from '../api/pokemonInterfaces';
import { PokemonTypeColor } from '../utils/constants';
import {PokemonListItem} from './usePokedex';

export interface PokemonDetails extends PokemonListItem {
  colors: string[];
  id: number;
  name: string;
  type: Species[];
  order: number;
  image: string;
  stats: Stat[];
}
export const usePokemon = (id: number) => {
  const [pokemon, setPokemon] = useState<PokemonDetails>();
  useEffect(() => {
    loadPokemonInfo(id);
  }, [id]);

  async function loadPokemonInfo(idPokemon: number) {
    const poke = (
      await pokeApi.get<PokemonDetailResponse>(`/pokemon/${idPokemon}`)
    ).data;

    setPokemon({
      name: poke.name,
      id: poke.id,
      type: poke.types.map(({type}) => type),
      order: poke.order,
      image: poke.sprites.other
        ? poke.sprites.other['official-artwork'].front_default
        : poke.sprites.front_default,
      colors: poke.types.map(({type}): string => {
        return PokemonTypeColor[type.name as keyof typeof PokemonTypeColor];
      }),
      stats: poke.stats,
    });
  }
  return {
    pokemon,
  };
};
