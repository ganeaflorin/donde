import { Platforms } from '@/types/movie';
import React from 'react';
import { Image, View } from 'react-native';
import { srcMapping } from './srcMappings';
import { stylesFn } from './StreamingIcon.styles';

interface Props {
  isAvailable: boolean;
  platform: Platforms;
}

const StreamingIcon = ({ isAvailable, platform }: Props) => {
  const styles = stylesFn(isAvailable);
  return (
    <View style={styles.unavailable}>
      <Image source={srcMapping[platform]} style={styles.icon} />
    </View>
  );
};

export default StreamingIcon;
