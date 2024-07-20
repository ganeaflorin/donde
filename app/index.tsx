import DropdownOption from '@/components/DropdownOption/DropdownOption';
import { Movie } from '@/components/Movie';
import { getMoviesFromApi } from '@/helpers/getMoviesFromApi';
import { SelectOption } from '@/types/movie';
import { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { AutocompleteDropdown } from 'react-native-autocomplete-dropdown';

export default function Index() {
  const [movieOptions, setMovieOptions] = useState<SelectOption[]>([]);
  const [selectedItem, setSelectedItem] = useState<SelectOption | null>(null);

  // https://www.npmjs.com/package/react-native-autocomplete-dropdown

  const onSelect = (option: SelectOption | any) => {
    if (option) {
      setSelectedItem(option);
    }
  };

  const onChange = async (input: string) => {
    if (input.length > 3) {
      const movies = await getMoviesFromApi(input);
      setMovieOptions(movies);
    }
  };

  return (
    <ScrollView>
      <AutocompleteDropdown
        clearOnFocus={false}
        closeOnBlur={true}
        // closeOnSubmit={false}
        onChangeText={onChange}
        onSelectItem={onSelect}
        dataSet={movieOptions}
        renderItem={(item: SelectOption | any) => <DropdownOption {...item} />}
        textInputProps={{
          placeholder: 'Search for a movie...',
          style: {
            fontFamily: 'RobotoCondensed-Regular',
          },
        }}
      />
      {selectedItem && <Movie {...selectedItem} />}
    </ScrollView>
  );
}
