import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import Tickers from './src/components/Tickers';
import colors from './src/styles/colors';
import Header from './src/components/Header';

function App(): React.JSX.Element {
  return (
    <View style={styles.outerContainer}>
      <View style={styles.headerSpacing}></View>
      <>
        <Header />
        <Tickers />
      </>
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
