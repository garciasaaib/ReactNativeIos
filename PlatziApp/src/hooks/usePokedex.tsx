import {useEffect, useState} from 'react';
import {pokeApi} from '../api/pokemonDB';
import {
  PokemonListResponse,
  PokemonDetailResponse,
  Species,
} from '../api/pokemonInterfaces';
import axios from 'axios';
import {PokemonTypeColor} from '../utils/constants';

export interface PokemonListItem {
  colors: string[];
  id: number;
  name: string;
  type: Species[];
  order: number;
  image:
    | string
    | 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.wikidex.net%2Fwiki%2FUnown&psig=AOvVaw3---RKB-is3q5NFNRRsMON&ust=1667248443757000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCJCD3MvmiPsCFQAAAAAdAAAAABAP';
}
// type PokemonType = keyof typeof PokemonTypeColor; //REVIEW - key types in enum

export const usePokedex = () => {
  const [pokedex, setPokedex] = useState<PokemonListItem[]>([]);
  const [isNext, setIsNext] = useState(true);
  const [offset, setOffset] = useState<number>(0);
  const limit: number = 20;

  useEffect(() => {
    (async () => {
      await loadPokemons();
    })();
    // loadPokemons();
  }, []);

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
      const pokemonArray: PokemonListItem[] = [];
      for await (const {url} of res.data.results) {
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

      setPokedex([...pokedex, ...pokemonArray]);
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
