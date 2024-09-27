import React from 'react';
import {View, Image, Text, StyleSheet, Dimensions} from 'react-native';
import colors from '../styles/colors';

const {width, height} = Dimensions.get('window');

const SplashScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/file.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.name}>Omar Morsi</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: colors.darkBlue,
    padding: 20,
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: width * 0.7,
    height: height * 0.7,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: colors.white,
  },
});

export default SplashScreen;
