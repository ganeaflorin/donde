import { whiteColor } from '@/constants/Colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  innerInput: {
    fontFamily: 'RobotoCondensed-Regular',
    padding: 10,
  },
  input: {
    backgroundColor: whiteColor,
    borderRadius: 50,
    padding: 5,
    borderWidth: 2,
    borderColor: 'black',
  },
  autocompleteWrapper: {
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
  },
});
