import 'react-native-gesture-handler';
import React from 'react';
import Home from './Screens/Home';
import Form from './Screens/Form';
import Colorpalatte from './Screens/Colorpalatte';
import Profile from './Screens/Profile';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { TouchableOpacity,Text} from 'react-native-web';


const Stack = createStackNavigator();

const app = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Form" component={Form} />
        <Stack.Screen name="Profile" component={Profile} />

        <Stack.Screen
          name="Colorpalatte"
          component={Colorpalatte}
          options={({ route }) => ({ title: route.params.paletteName })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default app;