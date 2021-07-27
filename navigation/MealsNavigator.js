import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CategoriesScreen from '../screens/CategoriesScreen'

const Stack = createStackNavigator();

export default function MealsNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="CategoriesScreen" component={CategoriesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}