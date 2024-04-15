
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Images from '../assets/index'
import HomeScreen from '../Screen/HomeScreen';
import FAQScreen from '../Screen/FAQScreen';
import ProfileScreen from '../Screen/ProfileScreen';
import SliderActivityScreen from '../Screen/SliderActivityScreen';
import { Image, StyleSheet, Text, View } from 'react-native';

const Tab = createBottomTabNavigator();

const HomeNavigatorRoutes = props => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarStyle: {
          paddingBottom: 15,
          width: '100%',
          backgroundColor: '#F2F2F2',
          paddingHorizontal: 40,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size, focused }) => (
            <View style={[styles.tabViewStl, { marginBottom: focused ? 19 : 0 }]}>
              <Image source={Images.tabBg} />
              <Image
                style={styles.centerAlign}
                source={Images.homeTabIcon} />
            </View>
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Tab2"
        component={ProfileScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size, focused }) => (
            <View style={[styles.tabViewStl, { marginBottom: focused ? 19 : 0 }]}>
              <Image source={Images.tabBg} />
              <Image
                style={styles.centerAlign}
                source={Images.userTabIcon} />
            </View>
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Tab1"
        component={FAQScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size, focused }) => (
            <View style={[styles.tabViewStl, { marginBottom: focused ? 19 : 0 }]}>
              <Image source={Images.tabBg} />
              <Image
                style={styles.centerAlign}
                source={Images.FaqTabIcon} />
            </View>
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Tab4"
        component={SliderActivityScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size, focused }) => (
            <View style={[styles.tabViewStl, { marginBottom: focused ? 19 : 0 }]}>
              <Image source={Images.tabBg} />
              <Image
                style={styles.centerAlign}
                source={Images.contactTabIcon} />
            </View>
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};
export default HomeNavigatorRoutes;

const styles = StyleSheet.create({
  tabViewStl: {
    justifyContent: 'center',
    //marginBottom: focused ? 19 : 0 
  },

  centerAlign: {
    position: 'absolute',
    alignSelf: 'center'
  }
});
