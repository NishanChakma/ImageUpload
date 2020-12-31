import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomePage from '../screens/homePage';
import ImageScreen from '../screens/imgScreen/Index';
import {forSlide} from './animation';

const Stack = createStackNavigator();

function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomeScreen"
        headerMode="hidden"
        screenOptions={({route}) => ({
          cardStyleInterpolator: forSlide,
        })}>
        <Stack.Screen name="HomeScreen" component={HomePage} />
        <Stack.Screen name="ImageScreen" component={ImageScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;
