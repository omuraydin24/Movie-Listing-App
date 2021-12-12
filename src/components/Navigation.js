import React from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import ListPage from "./pages/ListPage"
import MovieDetailPage from "./pages/MovieDetailPage"

const Navigation = () => {
  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor="transparent"
        barStyle="dark-content"
        translucent={true}
      />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: '#FAFAFA' },
        }}>
        <Stack.Screen name="ListPage" component={ListPage} />
        <Stack.Screen name="MovieDetailPage" component={MovieDetailPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default Navigation;
