import { Platforms } from '@/types/movie';
import React from 'react';
import { Image, View } from 'react-native';
import { srcMapping } from './srcMappings';
import { styles } from './StreamingIcon.styles';

interface Props {
  platform: Platforms;
}

const StreamingIcon = ({ platform }: Props) => {
  return <Image source={srcMapping[platform]} style={styles.icon} />;
};

export default StreamingIcon;
