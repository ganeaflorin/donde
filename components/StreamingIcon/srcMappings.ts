import { Platforms } from '@/types/movie';
import { ImageSourcePropType } from 'react-native';

export const srcMapping: Record<Platforms, ImageSourcePropType> = {
  [Platforms.NETFLIX]: require('@/assets/images/netflix.webp'),
  [Platforms.DISNEY]: require('@/assets/images/disney.webp'),
  [Platforms.MAX]: require('@/assets/images/max.webp'),
  [Platforms.SKY]: require('@/assets/images/skyshowtime.webp'),
  [Platforms.AMAZON]: require('@/assets/images/amazon.jpg'),
};
