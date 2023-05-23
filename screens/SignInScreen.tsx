import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
import Logo from "../assets/images/logo.png"
import CustomInput from '../components/CustomInput/CustomInput';
import CustomButton from '../components/CustomButton/CustomButton';

const SignInScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { height } = useWindowDimensions();
  const onSignInPressed = () => {
    console.warn('Sign in');
  };
  const onSignInFacebook = () => {
    console.warn('Sign in Facebook');
  };
  const onSignInGoogle = () => {
    console.warn('Sign in Google');
  };
  const onSignInApple = () => {
    console.warn('Sign in Apple');
  };
  const onForgotPaswordPressed = () => {
    console.warn('Forgot password');
  };
  const onSignUpPressed = () => {
    console.warn('On Sign Up Pressed');
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image source={Logo} style={(styles.logo, { height: height * 0.3 })} resizeMode="contain" />
        <CustomInput
          placeholder="Username"
          value={username}
          setValue={setUsername}
          secureTextEntry={false}
        />
        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry
        />
        <CustomButton onPress={onSignInPressed} text="Sign In" />

        <CustomButton text="Forgot password?" onPress={onForgotPaswordPressed} type="TERTIARY" />
        <CustomButton
          onPress={onSignInFacebook}
          text="Sign In with Facebook"
          bgColor="#E7EAF4"
          fgColor="#4765A9"
        />
        <CustomButton
          onPress={onSignInGoogle}
          text="Sign In with Google"
          bgColor="#FAE9EA"
          fgColor="#DD4D44"
        />
        <CustomButton
          onPress={onSignInApple}
          text="Sign In with Apple"
          bgColor="#E3E3E3"
          fgColor="#363636"
        />
        <CustomButton
          text="Don't have an account? Create one."
          onPress={onSignUpPressed}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20
  },
  logo: {
    width: '70%', // displays the same on any device size
    maxWidth: 300, // don't want it to be super wide on ipads or desktop
    maxHeight: 200 // will never be more than 30% of screen
  }
});

export default SignInScreen;
