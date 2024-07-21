import React from 'react';
import { Image } from 'react-native';
import { styles } from './Header.styles';

const Header = () => {
  return (
    <Image
      source={require('@/assets/images/logo-horizontal.png')}
      style={styles.logo}
    />
  );
};

export default Header;
