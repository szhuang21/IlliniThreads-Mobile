import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

const LoginForm = () => {
  return (
    <View style={styles.center}>
      <Text>Login</Text>
    </View>
  );
};
export default LoginForm;
