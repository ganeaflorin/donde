import { Autocomplete } from '@/components/Autocomplete';
import { Movie } from '@/components/Movie';
import { SelectOption } from '@/types/movie';
import { useState } from 'react';
import { ScrollView } from 'react-native';

export default function Index() {
  const [selectedItem, setSelectedItem] = useState<SelectOption | null>(null);

  // https://www.npmjs.com/package/react-native-autocomplete-dropdown

  return (
    <ScrollView>
      <Autocomplete setSelectedItem={setSelectedItem} />
      {selectedItem && <Movie {...selectedItem} />}
    </ScrollView>
  );
}
