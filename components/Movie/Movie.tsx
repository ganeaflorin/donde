import { getAvailableStreamingPlatforms } from '@/helpers/getAvailableStreamingPlatforms';
import { Platforms, SelectOption } from '@/types/movie';
import React, { useEffect, useState } from 'react';
import { Image, View } from 'react-native';
import StreamingIcon from '../StreamingIcon/StreamingIcon';
import { ThemedText } from '../ThemedText';
import { styles } from './Movie.styles';
import { FontVariants } from '../ThemedText/fontVariants';
import { Divider } from '../Divider';

const Movie = ({ id, posterLink, year, overview, title }: SelectOption) => {
  const [platforms, setPlatforms] = useState<unknown[]>([]);

  async function setData() {
    setPlatforms(await getAvailableStreamingPlatforms(id));
  }

  useEffect(() => {
    setData();
  }, [id]);

  return (
    <View style={styles.container}>
      <View style={styles.movieDetails}>
        <Image source={{ uri: posterLink }} style={styles.poster} />
        <View style={styles.metadata}>
          <ThemedText font={FontVariants.SEMI_BOLD}>{title}</ThemedText>
          <Divider />
          <ThemedText>{year}</ThemedText>
        </View>
        <ThemedText>{overview}</ThemedText>
      </View>
      <View style={styles.platformsContainer}>
        {Object.values(Platforms).map((platform) => (
          <StreamingIcon
            key={platform}
            platform={platform}
            isAvailable={platforms.includes(platform)}
          />
        ))}
      </View>
    </View>
  );
};

export default Movie;
