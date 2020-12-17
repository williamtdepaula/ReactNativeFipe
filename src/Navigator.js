import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './screens/HomeScreen'
import ValueScreen from './screens/ValueScreen'

const Stack = createStackNavigator();

export default function Navigator() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Value" component={ValueScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }