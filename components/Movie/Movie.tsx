import { whiteColor } from '@/constants/Colors';
import { getAvailableStreamingPlatforms } from '@/helpers/getAvailableStreamingPlatforms';
import { Platforms, SelectOption } from '@/types/movie';
import React, { useEffect, useState } from 'react';
import { Image, View } from 'react-native';
import { StreamingIcon } from '../StreamingIcon';
import { ThemedText } from '../ThemedText';
import { FontVariants } from '../ThemedText/fontVariants';
import { styles } from './Movie.styles';

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
        {posterLink && (
          <Image
            source={{ uri: process.env.EXPO_PUBLIC_POSTER_PATH + posterLink }}
            style={styles.poster}
          />
        )}
        <View style={styles.metadata}>
          <ThemedText textColor={whiteColor} font={FontVariants.SEMI_BOLD}>
            {title}
          </ThemedText>
          <ThemedText textColor={whiteColor}>{year}</ThemedText>
        </View>
        <ThemedText textColor={whiteColor}>{overview}</ThemedText>
      </View>
      {platforms.length === 0 && (
        <ThemedText
          textColor={whiteColor}
          font={FontVariants.MEDIUM}
          style={styles.unavailable}
        >
          This movie is not available on any streaming platform
        </ThemedText>
      )}
      {platforms.length > 0 && (
        <View style={styles.platformsContainer}>
          <ThemedText
            textColor={whiteColor}
            font={FontVariants.MEDIUM}
            style={styles.availableOn}
          >
            Available on
          </ThemedText>
          <View style={styles.platformsIcons}>
            {Object.values(Platforms)
              .filter((platform) => platforms.includes(platform))
              .map((platform) => (
                <StreamingIcon key={platform} platform={platform} />
              ))}
          </View>
        </View>
      )}
    </View>
  );
};

export default Movie;
