import { Stack } from 'expo-router';
import { SelectProvider } from '@mobile-reality/react-native-select-pro';

export default function RootLayout() {
  return (
    <SelectProvider>
      <Stack>
        <Stack.Screen name='index' />
      </Stack>
    </SelectProvider>
  );
}
