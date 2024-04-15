
import React, { Component, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from './src/Screen/SplashScreen';
import SignUpScreen from './src/Screen/SignUpScreen'
import HomeScreen from './src/Screen/HomeScreen'
import LoginScreen from './src/Screen/LoginScreen'
import LandingPage from './src/Screen/LandingPage';
import FaceScreen from './src/Screen/FaceScreen';
import VerificationScreen from './src/Screen/VerificationScreen';
import FAQScreen from './src/Screen/FAQScreen';
import ProfileScreen from './src/Screen/ProfileScreen';
import HomeNavigatorRoutes from './src/Components/TapNavigator'
import HomePicturesScreen from './src/Screen/HomePicturesScreen';
import BestPicsScreen from './src/Screen/BestPicsScreen';
import ContactUsScreen from './src/Screen/ContactUsScreen';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{ headerShown: false, animation: 'none', animationDuration: 0, }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="LandingPage" component={LandingPage} />
        <Stack.Screen name="FaceScreen" component={FaceScreen} />
        <Stack.Screen name="VerificationScreen" component={VerificationScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="FAQScreen" component={FAQScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="HomeNavigatorRoutes" component={HomeNavigatorRoutes} />
        <Stack.Screen name="HomePicturesScreen" component={HomePicturesScreen} />
        <Stack.Screen name="BestPicsScreen" component={BestPicsScreen} />
        <Stack.Screen name="ContactUsScreen" component={ContactUsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
