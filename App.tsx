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
      setIsSplashVisible(false); // Hide splash screen after 3 seconds
    }, 3000); // Adjust the time as needed

    return () => clearTimeout(timer); // Clear the timer on component unmount
  }, []);

  return (
    <View style={styles.outerContainer}>
      <SafeAreaView style={styles.safeArea}>
        {isSplashVisible ? (
          <SplashScreen />
        ) : (
          <>
            <Header />
            <ScrollView contentContainerStyle={styles.scrollView}>
              <Tickers />
            </ScrollView>
          </>
        )}
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: colors.darkBlue2,
  },
  safeArea: {
    flex: 1,
    backgroundColor: colors.darkBlue2,
  },
  scrollView: {
    backgroundColor: colors.darkBlue,
    alignItems: 'center',
    flexGrow: 1,
    minHeight: '100%',
  },
});

export default App;
