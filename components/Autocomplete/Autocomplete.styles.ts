import { themeColor } from '@/constants/Colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  innerInput: {
    fontFamily: 'RobotoCondensed-Regular',
    paddingLeft: 10,
    paddingRight: 10,
  },
  input: {
    borderColor: themeColor,
    borderWidth: 2,
    borderStyle: 'solid',
    borderRadius: 50,
  },
  autocompleteWrapper: {
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
  },
});
