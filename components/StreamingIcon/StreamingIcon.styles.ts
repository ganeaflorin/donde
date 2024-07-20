import { StyleSheet } from 'react-native';

export const stylesFn = (isAvailable: boolean) =>
  StyleSheet.create({
    unavailable: {
      // filter: 'brightness(50%)',
      backgroundColor: isAvailable ? 'rgba(0,0,0,0.5)' : '',
    },
    icon: {
      borderRadius: 10,
      height: 50,
      width: 50,
    },
  });
