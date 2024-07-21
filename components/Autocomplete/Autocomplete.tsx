import { getMoviesFromApi } from '@/helpers/getMoviesFromApi';
import { SelectOption } from '@/types/movie';
import React, { useState } from 'react';
import { View } from 'react-native';
import { AutocompleteDropdown } from 'react-native-autocomplete-dropdown';
import { DropdownOption } from '../DropdownOption';
import { styles } from './Autocomplete.styles';
import { ThemedText } from '../ThemedText';

interface Props {
  setSelectedItem: React.Dispatch<React.SetStateAction<SelectOption | null>>;
}

const Autocomplete = ({ setSelectedItem }: Props) => {
  const [movieOptions, setMovieOptions] = useState<SelectOption[]>([]);

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

  const onClear = () => {
    setSelectedItem(null);
    setMovieOptions([]);
  };

  return (
    <View style={styles.autocompleteWrapper}>
      <AutocompleteDropdown
        clearOnFocus={false}
        closeOnBlur={true}
        onChangeText={onChange}
        onSelectItem={onSelect}
        onClear={onClear}
        dataSet={movieOptions}
        renderItem={(item: SelectOption | any) => <DropdownOption {...item} />}
        textInputProps={{
          placeholder: 'Search for a movie...',
          style: styles.innerInput,
        }}
        inputContainerStyle={styles.input}
      />
    </View>
  );
};

export default Autocomplete;
