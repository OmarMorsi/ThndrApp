// src/components/Header.tsx
import * as React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import colors from '../styles/colors';

import headerImage from '../../assets/file.png';

const Header: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image source={headerImage} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingLeft: 10,
    backgroundColor: colors.darkBlue2,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  image: {
    width: 120,
    height: 50,
    resizeMode: 'contain',
  },
});

export default Header;
