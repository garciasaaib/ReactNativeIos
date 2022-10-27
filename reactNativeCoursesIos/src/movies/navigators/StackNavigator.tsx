import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../screens/HomeScreen';
import {DetailsScreen} from '../screens/DetailsScreen';
import {Movie} from '../api/movieInterface';
import {FadeScreen} from '../screens/FadeScreen';
import {GradientProvider} from '../context/GradientContext';

export type MovieStackRootParams = {
  Home: undefined;
  Details: Movie;
  Fade: undefined;
};

// Type for this stack navigator
const Stack = createNativeStackNavigator<MovieStackRootParams>();

/**
 * This component contains the whole app of movies, is the main navigator stack.
 * As we see, we have 3 screens. Home, Details and Fade.
 * GradientProvider is the context used to create the gradiand in the background in the main screen.
 * @returns JSX element that contains the Navigator, and as wrapper we have the context for the gradiant.
 */
export const MoviesStackNavigator = () => {
  return (
    <GradientProvider>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Fade" component={FadeScreen} />
      </Stack.Navigator>
    </GradientProvider>
  );
};
