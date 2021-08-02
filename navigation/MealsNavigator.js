import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealDetailScreen from "../screens/MealDetailScreen"
import Colors from '../constants/Colors';
import { Platform } from 'react-native';


const Stack = createStackNavigator();

export default function MealsNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="CategoriesScreen" 
          component={CategoriesScreen} 
          options={{
            title:"Categories",
            headerStyle:{
              backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white',
            },
            headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
          }}
        />
        <Stack.Screen 
          name="CategoryMealsScreen" 
          component={CategoryMealsScreen} 
          options={({ route }) => ({ 
            title: route.params.title,
            headerStyle:{
              backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white',
            },
            headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
          })} 
        />
        <Stack.Screen 
          name="MealDetailScreen" 
          component={MealDetailScreen} 
          options={{title:"Meal Detail"}}
        />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}