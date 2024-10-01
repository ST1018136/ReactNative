import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DishNameScreen from './screens/DishNameScreen';
import DescriptionScreen from './screens/DescriptionScreen';
import PriceScreen from './screens/PriceScreen';
import SelectCourseMealScreen from './screens/MealScreen';

const Stack = createNativeStackNavigator();
const TopTab =  createBottomTabNavigator ();

function MenuTabs() {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name="Dish Name" component={DishNameScreen} />
      <TopTab.Screen name="Description" component={DescriptionScreen} />
      <TopTab.Screen name="Price" component={PriceScreen} />
      <TopTab.Screen name="Select Course Meal" component={SelectCourseMealScreen} />
    </TopTab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Menu" component={MenuTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}