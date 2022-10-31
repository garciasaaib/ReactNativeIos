import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import useFavorites from '../../hooks/useFavorites';


const PokemonFavorite = ({id}: {id: number}) => {
  const {addFavorite} = useFavorites();
  return (
    <>
      <FontAwesome5
        name="heart"
        color="white"
        size={20}
        onPress={() => addFavorite(id)}
      />
    </>
  );
};

export default PokemonFavorite;
