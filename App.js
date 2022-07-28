import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Home  from './Screens/Home';
import Colorpalatte from './Screens/Colorpalatte';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const app = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Colorpalatte" component={Colorpalatte} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};



export default app;
