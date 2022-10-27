import {useEffect, useState} from 'react';
import movieDB from '../api/movieDB';
import {Movie, MovieDBNowPlaying} from '../api/movieInterface';

interface MoviesState {
  nowPlaying: Movie[];
  popular: Movie[];
  topRated: Movie[];
  upcoming: Movie[];
}
/**
 * Custom hook that in first render does a request
 * to fill the movies lists as a promise, when the promise is done
 * the flag isLoading changes
 * @returns {moviesState}: lists of movies, even if they are empty
 * @returns {isLoading}: flag that show if the request has finished
 */
export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  // const [moviesPlaying, setMoviesPlaying] = useState<Movie[]>([]);
  // const [moviesPopular, setMoviesPopular] = useState<Movie[]>([]);
  // const [moviesTopRated, setMoviesTopRated] = useState<Movie[]>([]);
  // const [moviesUpcoming, setMoviesUpcoming] = useState<Movie[]>([]);
  const [moviesState, setMoviesState] = useState<MoviesState>({
    nowPlaying: [],
    popular: [],
    topRated: [],
    upcoming: [],
  });

  /**
   * Do the request to fill the lists in movieState, & change isLoading on it
   */
  const getMovies = async () => {
    const promiseNowPlaying = movieDB.get<MovieDBNowPlaying>('/now_playing');
    const promisePopular = movieDB.get<MovieDBNowPlaying>('/popular');
    const promiseTopRated = movieDB.get<MovieDBNowPlaying>('/top_rated');
    const promiseUpcoming = movieDB.get<MovieDBNowPlaying>('/upcoming');

    const res = await Promise.all([
      promiseNowPlaying,
      promisePopular,
      promiseTopRated,
      promiseUpcoming,
    ]);
    await setMoviesState({
      nowPlaying: res[0].data.results,
      popular: res[1].data.results,
      topRated: res[2].data.results,
      upcoming: res[3].data.results,
    });
    await setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return {
    ...moviesState,
    isLoading,
  };
};
