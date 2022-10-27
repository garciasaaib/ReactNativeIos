import {useEffect, useState} from 'react';
import movieDB from '../api/movieDB';
import {Cast, MovieCredits, MovieFull} from '../api/movieInterface';

interface MovieDetails {
  cast: Cast[];
  movieFull?: MovieFull;
}
/**
 * Custom hook to manage the requests for movie details and actors asyncronusly
 * isLoading's flag show us if the request has finished
 * @param movieId number: id of the movie we want details
 * @returns {cast} list of actors that participate in this movie
 * @returns {movieFull} more details about this movie
 * @returns {isLoading} flag to check if promises already have done
 */
export const useMoviesDetails = (movieId: number) => {
  const [isLoading, setIsLoading] = useState(true);
  const [state, setState] = useState<MovieDetails>({
    cast: [],
    movieFull: undefined,
  });

  /**
   * Do the request to fill the lists in movie details, & change isLoading on it
   */
  const getMovieDetails = async (id: number) => {
    const [movieDetailsRes, castRes] = await Promise.all([
      movieDB.get<MovieFull>(`/${id}`),
      movieDB.get<MovieCredits>(`/${id}/credits`),
    ]);
    setState({
      movieFull: movieDetailsRes.data,
      cast: castRes.data.cast,
    });
    setIsLoading(false);
  };

  useEffect(() => {
    getMovieDetails(movieId);
  }, [movieId]);

  return {
    ...state,
    isLoading,
  };
};
