import { themeColor, whiteColor } from '@/constants/Colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  logo: {
    height: 50,
    width: '50%',
  },
  container: {
    borderBottomColor: whiteColor,
    backgroundColor: themeColor,
    paddingBottom: 5,
    borderBottomWidth: 2,
    alignItems: 'center',
  },
});
