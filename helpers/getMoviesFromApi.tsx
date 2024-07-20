import { Movie } from '@/types/movie';

export const getMoviesFromApi = async (query: string) => {
  const API_URL = process.env.EXPO_PUBLIC_API_URL;
  const API_KEY = process.env.EXPO_PUBLIC_API_KEY;

  try {
    const response = await fetch(
      `${API_URL}/search/movie?api_key=${API_KEY}&query=${query}`
    );
    const json = await response.json();
    const parsedMovies = json.results
      .sort((a: Movie, b: Movie) => a['vote_count'] > b['vote_count'])
      .slice(0, 20)
      .map((movie: Movie) => ({
        id: movie.id,
        title: movie.title,
        overview: movie.overview,
        posterLink: process.env.EXPO_PUBLIC_POSTER_PATH + movie['poster_path'],
        year: movie['release_date'].slice(0, 4),
      }));
    return parsedMovies;
  } catch (error) {
    console.error(error);
  }
};
