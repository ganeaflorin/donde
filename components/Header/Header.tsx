import React from 'react';
import { Image, View } from 'react-native';
import { styles } from './Header.styles';

const Header = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('@/assets/images/logo-horizontal.png')}
        style={styles.logo}
      />
    </View>
  );
};

export default Header;
