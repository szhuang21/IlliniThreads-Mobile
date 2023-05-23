import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import SignInScreen from './screens/SignInScreen';

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <SignInScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC',
  }
});

export default App;
