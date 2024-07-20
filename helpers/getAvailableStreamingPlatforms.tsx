export const getAvailableStreamingPlatforms = async (id: string) => {
  const API_URL = process.env.EXPO_PUBLIC_API_URL;
  const API_KEY = process.env.EXPO_PUBLIC_API_KEY;
  const locale = 'RO';

  try {
    const response = await fetch(
      `${API_URL}/movie/${id}/watch/providers?api_key=${API_KEY}&locale=${locale.toLowerCase()}`
    );
    const json = await response.json();

    return locale in json.results ? json.results[locale].flatrate : [];
  } catch (error) {
    console.error(error);
  }
};
