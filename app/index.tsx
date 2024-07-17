import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { Select } from '@mobile-reality/react-native-select-pro';

export default function Index() {
  const movieId = 1;
  const API_URL = process.env.EXPO_PUBLIC_API_URL;
  const API_KEY = process.env.EXPO_PUBLIC_API_KEY;

  const [movieOptions, setMovieOptions] = useState([]);
  // console.log('🚀  movieOptions:', movieOptions[0]);

  const onSelect = (option: any) => {
    console.log('aici randam altceva si facem callul cu movie id:', option);
  };

  const setOptions = (input: string) => {
    fetch(`${API_URL}/search/movie?api_key=${API_KEY}&query=${input}`, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('data.results', data.results.length);
        // setMovieOptions(
        //   data.results
        //     .sort((a, b) => a['vote_count'] > b['vote_count'])
        //     .slice(0, 20)
        // );
      });
  };

  const onChange = (input: string) => {
    if (input.length > 3) {
      setOptions(input);
    }
  };

  return (
    <View
    // style={{
    //   flex: 1,
    //   justifyContent: 'center',
    //   alignItems: 'center',
    // }}
    >
      <Text>{API_KEY ?? 'holo'}</Text>
      <Select
        options={movieOptions}
        searchable
        onSelect={onSelect}
        onSelectChangeText={onChange}
      />
    </View>
  );
}
