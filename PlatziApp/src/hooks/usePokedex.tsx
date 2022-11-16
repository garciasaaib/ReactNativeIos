import {useEffect, useState} from 'react';
import {pokeApi} from '../api/pokemonDB';
import {
  PokemonListResponse,
  PokemonDetailResponse,
  Species,
  Result,
} from '../api/pokemonInterfaces';
import axios from 'axios';
import {PokemonTypeColor} from '../utils/constants';

export interface PokemonListItem {
  colors: string[];
  id: number;
  name: string;
  type: Species[];
  order: number;
  image: string | '';
}
// type PokemonType = keyof typeof PokemonTypeColor; //REVIEW - key types in enum

export const usePokedex = () => {
  const [pokedex, setPokedex] = useState<PokemonListItem[]>([]);
  const [isNext, setIsNext] = useState(true);
  const [offset, setOffset] = useState<number>(0);
  const limit: number = 20;

  useEffect(() => {
    loadPokemons();
  }, []);

  async function mapPokemonlist(res: Result[]) {
    const pokemonArray: PokemonListItem[] = [];
    for await (const {url} of res) {
      const poke = (await axios.get<PokemonDetailResponse>(url)).data;
      pokemonArray.push({
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
      });
    }
    return pokemonArray;
  }

  async function loadPokemons() {
    try {
      if (!isNext) {
        return console.log('No more pokeons');
      }
      const res = await pokeApi.get<PokemonListResponse>('/pokemon', {
        params: {
          offset,
          limit,
        },
      });
      if (res.data.next) {
        setOffset(offset + limit);
      } else {
        setIsNext(false);
      }

      const newList = await mapPokemonlist(res.data.results);
      setPokedex([...pokedex, ...newList]);
    } catch (error) {
      throw error;
    }
  }
  return {
    pokedex,
    loadPokemons,
    isNext,
  };
};
