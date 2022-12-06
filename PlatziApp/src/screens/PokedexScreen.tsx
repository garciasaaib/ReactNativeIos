import React from 'react';
import PokedexList from '../components/Pokedex/PokedexList';
import PokeballBG from '../components/PokeballBG';

export default function PokedexScreen() {
  return (
    <>
      <PokeballBG title={true} />

      <PokedexList />
    </>
  );
}
