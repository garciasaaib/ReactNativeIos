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
  const [filteredList, setFilteredList] = useState<unknown[]>([]);

  // const [isLoading, setLoading] = useState<boolean>(false);

  const isNext = useRef<boolean>(true);
  const offset = useRef<number>(0);
  const count = useRef<number>(0);
  const limit: number = 10;

  // fetch for only one pokemon
  async function fetchPokemon(res: Result) {
    // req data
    const response = await axios.get<PokemonDetailResponse>(res.url);
    if (response.data === undefined) {
      throw new Error('Error getting pokemon details from api');
    }
    // const formatedPokemon = await formatPokemon(response.data);
    return response.data;
  }

  // format one pokemon
  async function formatPokemon(poke: PokemonDetailResponse) {
    const pokeImage = poke.sprites.other
      ? poke.sprites.other['official-artwork'].front_default
      : poke.sprites.front_default;
    const pokeColor = poke.types.map(({type}): string => {
      return PokemonTypeColor[type.name as keyof typeof PokemonTypeColor];
    });
    const pokeGradiant = await getImageGradiantColor(pokeImage, pokeColor[0]);
    if (pokeGradiant === undefined) {
      throw new Error('Error setting color');
    }
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

  // set status to next requests
  async function fetchPokemonsApi() {
    if (!isNext.current) {
      return console.log('No more pokeons');
    }
    const res = (
      await pokeApi.get<PokemonListResponse>('/pokemon', {
        params: {
          offset: offset.current,
          limit,
        },
      })
    ).data;
    // set maximum number of pokemons
    if (!count.current) {
      count.current = res.count;
    }

    // allow next search
    if (res.next) {
      offset.current = offset.current + limit;
    } else {
      isNext.current = false;
    }
    return res.results;
  }

  //
  async function loadPokemons() {
    try {
      // first fetch of pokemons
      const res = await fetchPokemonsApi();
      if (!res) {
        throw new Error('Error fetchin pokemons');
      }
      /**
       * Fetch pokemons 1 by 1 and give them format
       // const list: PokemonDetailResponse[] = [];
       */
      const list: PokemonListItem[] = [];
      await Promise.allSettled(
        res.map(async poke => {
          // fetch pokemon details
          const data = await fetchPokemon(poke);
          // format pokemon details
          const formatedPokemon = await formatPokemon(data);
          return formatedPokemon;
        }),
      ).then(data =>
        data.forEach(p => {
          if (p.status === 'fulfilled') {
            list.push(p.value);
          }
        }),
      );
      console.log(list.forEach(poke => console.log(poke.name, poke.id)));

      // set in the list
      setPokedex([...pokedex, ...list]);
    } catch (error) {
      console.log('---> ', error);
    }
  }
  /*
  async function filterByName(partialName: string) {
    try {
      // request all pokemons

      const res = await pokeApi.get<PokemonListResponse>('/pokemon', {
        params: {
          limit: count.current || 1200,
        },
      });

      // filter by name
      const nameRegE
      // ;xp = new RegExp(partialName);
      // const pokeByList = res.data.results.filter(({name}) =>
      //   nameRegExp.test(name),
      // );
      // create Promises
      // const newList = await Promise.all(
      // pokeByList.map(pokemon => mapPokemonlist(pokemon)),
      // );
      //   .then(data => {
      //     console.log(data);
      //     return data;
      //   })
      //   .catch(error => {
      //     console.error(error);
      //   });

      // setFilteredList([...pokeByList]);`
    } catch (error) {
      throw new Error('Bad request');
    }
  }
  */
  useEffect(() => {
    loadPokemons();
  }, []);

  return {
    pokedex,
    loadPokemons,
    isNext,
  };
};
