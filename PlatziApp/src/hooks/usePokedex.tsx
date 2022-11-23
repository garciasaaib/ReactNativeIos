import {useEffect, useRef, useState} from 'react';
import {pokeApi} from '../api/pokemonDB';
import {
  PokemonListResponse,
  PokemonDetailResponse,
  Species,
  Result,
  Stat,
} from '../api/pokemonInterfaces';
import axios from 'axios';
import {PokemonTypeColor} from '../utils/constants';
import {getImageGradiantColor} from '../helpers/getImageGradiantColor';
// import {getImageGradiantColor} from '../helpers/getImageGradiantColor';

export interface PokemonListItem {
  colors: string[];
  id: number;
  name: string;
  type: Species[];
  order: number;
  image: string | '';
  bgColor: string;
  stats: Stat[];
  sprites: string[];
  abilities: Species[];
  moves: Species[];
}
// type PokemonType = keyof typeof PokemonTypeColor; //REVIEW - key types in enum

export const usePokedex = () => {
  const [pokedex, setPokedex] = useState<PokemonListItem[]>([]);

  const isNext = useRef<boolean>(true);
  const offset = useRef<number>(0);
  const limit: number = 20;

  async function mapPokemonlist(res: Result) {
    // complex data select
    const poke = (await axios.get<PokemonDetailResponse>(res.url)).data;
    const pokeImage = poke.sprites.other
      ? poke.sprites.other['official-artwork'].front_default
      : poke.sprites.front_default;
    const pokeColor = poke.types.map(({type}): string => {
      return PokemonTypeColor[type.name as keyof typeof PokemonTypeColor];
    });
    const pokeGradiant = await getImageGradiantColor(pokeImage, pokeColor[0]);
    const pokeSprites = [poke.sprites.front_default, poke.sprites.back_default];
    const pokeAbilities = poke.abilities.map(pokes => pokes.ability);
    const pokeMoves = poke.moves.map(({move}) => move);

    const pokeObject: PokemonListItem = {
      name: poke.name,
      id: poke.id,
      type: poke.types.map(({type}) => type),
      order: poke.order,
      image: pokeImage,
      colors: pokeColor,
      bgColor: pokeGradiant,
      stats: poke.stats,
      sprites: pokeSprites,
      abilities: pokeAbilities,
      moves: pokeMoves,
    };
    return pokeObject;
  }

  async function loadPokemons() {
    try {
      if (!isNext.current) {
        return console.log('No more pokeons');
      }
      const res = await pokeApi.get<PokemonListResponse>('/pokemon', {
        params: {
          offset: offset.current,
          limit,
        },
      });
      if (res.data.next) {
        offset.current = offset.current + limit;
      } else {
        isNext.current = false;
      }

      const newList = await Promise.all(
        res.data.results.map(pokemon => mapPokemonlist(pokemon)),
      );
      setPokedex([...pokedex, ...newList]);
    } catch (error) {
      throw error;
    }
  }
  useEffect(() => {
    loadPokemons();
  }, []);

  return {
    pokedex,
    loadPokemons,
    isNext,
  };
};
