import React from 'react';
import { ThemedText } from '../ThemedText/ThemedText';
import { Image, View } from 'react-native';
import { SelectOption } from '@/types/movie';
import { styles } from './DropdownOption.styles';
import { FontVariants } from '../ThemedText/fontVariants';

const DropdownOption = ({ title, year, posterLink }: SelectOption) => {
  return (
    <View style={styles.optionContainer}>
      <View style={styles.posterContainer}>
        <Image style={styles.poster} source={{ uri: posterLink }} />
      </View>
      <View style={styles.textContainer}>
        <ThemedText font={FontVariants.SEMI_BOLD}>{title}</ThemedText>
        <ThemedText font={FontVariants.REGULAR}>{year}</ThemedText>
      </View>
    </View>
  );
};

export default DropdownOption;
