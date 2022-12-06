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

  // for seach pokemon
  const [filteredList, setFilteredList] = useState<PokemonListItem[]>([]);
  const [isLoading, setLoading] = useState(false);

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
    let pokeGradiant = await getImageGradiantColor(pokeImage, pokeColor[0]);
    if (pokeGradiant === undefined) {
      throw new Error('Error setting color');
    } else if (pokeGradiant === '#FFFFFF') {
      pokeGradiant = pokeColor[0];
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

  // main function to load pokemons in state
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

      // set in the list
      setPokedex([...pokedex, ...list]);
    } catch (error) {
      console.log('---> ', error);
    }
  }

  async function loadFilteredList(partialName: string) {
    try {
      setLoading(true);
      if (!partialName || partialName.length < 3 || /\W+/i.test(partialName)) {
        setLoading(false);
        return setFilteredList([]);
      }
      // request all pokemons
      const res = await pokeApi.get<PokemonListResponse>('/pokemon', {
        params: {
          limit: count.current || 1200,
        },
      });

      // filter by name
      const nameRegExp = new RegExp(partialName, 'i');
      const pokeByList = res.data.results.filter(({name}) =>
        nameRegExp.test(name),
      );
      // create Promises
      const list: PokemonListItem[] = [];
      await Promise.allSettled(
        pokeByList.map(async poke => {
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
      setFilteredList([...list]);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      throw new Error('Bad request');
    }
  }

  useEffect(() => {
    loadPokemons();
  }, []);

  return {
    pokedex,
    loadPokemons,
    isNext,
    filteredList,
    loadFilteredList,
  };
};
