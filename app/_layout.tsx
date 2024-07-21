import { Header } from '@/components/Header';
import { themeColor } from '@/constants/Colors';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { AutocompleteDropdownContextProvider } from 'react-native-autocomplete-dropdown';

export default function RootLayout() {
  const [loaded, error] = useFonts({
    'RobotoCondensed-Light': require('@/assets/fonts/RobotoCondensed-Light.ttf'),
    'RobotoCondensed-Regular': require('@/assets/fonts/RobotoCondensed-Regular.ttf'),
    'RobotoCondensed-Medium': require('@/assets/fonts/RobotoCondensed-Medium.ttf'),
    'RobotoCondensed-SemiBold': require('@/assets/fonts/RobotoCondensed-SemiBold.ttf'),
    'RobotoCondensed-Bold': require('@/assets/fonts/RobotoCondensed-Bold.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <AutocompleteDropdownContextProvider>
      <StatusBar translucent={false} backgroundColor={themeColor} />
      <Header />
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name='index' />
      </Stack>
    </AutocompleteDropdownContextProvider>
  );
}
