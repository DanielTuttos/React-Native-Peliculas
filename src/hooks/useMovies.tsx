import { useEffect, useState } from 'react';
import movieDb from '../api/movieDB';
import { Movie, MovieDBResponse } from '../interfaces/movieInterfaces';

interface MoviesState {
  nowPlaying: Movie[];
  popular: Movie[];
  topRated: Movie[];
  upcoming: Movie[];
}

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [moviesState, setMoviesState] = useState<MoviesState>({
    nowPlaying: [],
    popular: [],
    topRated: [],
    upcoming: [],
  });

  const getMovies = async () => {
    try {
      const nowPlayingPromise = movieDb.get<MovieDBResponse>('/now_playing');
      const popularPromise = movieDb.get<MovieDBResponse>('/popular');
      const topRatedPromise = movieDb.get<MovieDBResponse>('/top_rated');
      const upcommingPromise = movieDb.get<MovieDBResponse>('/upcoming');

      const resp = await Promise.all([
        nowPlayingPromise,
        popularPromise,
        topRatedPromise,
        upcommingPromise,
      ]);
      setMoviesState({
        nowPlaying: resp[0].data.results,
        popular: resp[1].data.results,
        topRated: resp[2].data.results,
        upcoming: resp[3].data.results,
      });
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // now playing
    getMovies();
  }, []);

  return {
    ...moviesState,
    isLoading,
  };
};
