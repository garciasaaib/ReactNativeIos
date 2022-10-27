/* eslint-disable react-native/no-inline-styles */
import React, {useContext, useEffect} from 'react';
import {View, Dimensions, ScrollView, Button} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';
import {MoviePoster} from '../components/MoviePoster';
import {useMovies} from '../hooks/useMovies';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {HorizontalSlider} from '../components/HorizontalSlider';
import Carousel, {ICarouselInstance} from 'react-native-reanimated-carousel';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {MovieStackRootParams} from '../navigators/StackNavigator';
import {GradiantBackground} from '../components/GradiantBackground';
import {getPosterColors} from '../helpers/getPosterColors';
import {GradientContext} from '../context/GradientContext';
import {getImageUri} from '../helpers/getImageUri';

/**
 * Contains the main Screen where a lot of lists are shown,
 * and a main movies list that shows like a carousel. All the posters are clickeables.
 */
export const HomeScreen = () => {
  // hook with all the lists of movies, and the flag after the request
  const {isLoading, nowPlaying, upcoming, popular, topRated} = useMovies();
  const {top} = useSafeAreaInsets();
  // width used to sizes the main carosel
  const width = Dimensions.get('window').width;
  // not sure why but they use in carousel
  const ref = React.useRef<ICarouselInstance>(null);
  // typed navigator
  const navigation = useNavigation<StackNavigationProp<MovieStackRootParams>>();
  // context colors to apply the new colors to the background
  const {setColors} = useContext(GradientContext);

  /**
   * Function that takes the index of the focus carousel
   * And obtain the main colors of that, consequently,
   * set those as new colors the gradiant context
   * @param index number index of the item from carousel to take the uri
   */
  const getColors = async (index: number) => {
    const uri = getImageUri(nowPlaying[index].poster_path);
    const [primary = 'green', secondary = 'orange'] = await getPosterColors(
      uri,
    );
    setColors({primary, secondary});
  };

  // first render of the main movieslist, run getColors to create the first gradient
  useEffect(() => {
    if (nowPlaying.length > 0) {
      getColors(0);
    }
  }, [nowPlaying]);

  /** if the data request hasn't finished, is showed a loader component */
  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <ActivityIndicator color="salmon" size={50} />
      </View>
    );
  }

  /** Main render component
   * It must have a carousel, and other 3 lists of movies
   */
  return (
    <GradiantBackground>
      <ScrollView
        style={{
          marginTop: top + 20,
        }}>
        {/* Main Caruosel */}
        <View style={{justifyContent: 'center'}}>
          <Carousel
            loop
            width={width * 0.7}
            height={width * 1.05}
            mode="parallax" // mode of the carousel
            style={{width, justifyContent: 'center'}}
            ref={ref}
            autoPlay={false}
            windowSize={2}
            modeConfig={{
              parallaxScrollingScale: 0.9,
              parallaxScrollingOffset: 40,
            }}
            data={nowPlaying}
            renderItem={({item}) => <MoviePoster movie={item} />} //map for every movie
            onSnapToItem={index => getColors(index)} // action when the focus movie changes
          />
        </View>

        {/* Top Rated Movies */}
        <HorizontalSlider title="Popular" movies={popular!} />

        {/* Top Rated Movies */}
        <HorizontalSlider title="Top Rated" movies={topRated!} />

        {/* Top Rated Movies */}
        <HorizontalSlider title="Upcoming" movies={upcoming!} />

        <Button
          title="Go to Fade animation"
          onPress={() => navigation.navigate('Fade')}
        />
      </ScrollView>
    </GradiantBackground>
  );
};
