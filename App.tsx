import * as React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import Tickers from './src/components/Tickers';
import colors from './src/styles/colors';
import Header from './src/components/Header';
import SplashScreen from './src/screens/SplashScreen';
import {useEffect, useState} from 'react';

function App(): React.JSX.Element {
  const [isSplashVisible, setIsSplashVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSplashVisible(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.outerContainer}>
      <View style={styles.headerSpacing}></View>
      {isSplashVisible ? (
        <SplashScreen />
      ) : (
        <>
          <Header />
          <Tickers />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: colors.darkBlue,
  },
  headerSpacing: {
    paddingBottom: 40,
    backgroundColor: colors.darkBlue2,
  },
});

export default App;
