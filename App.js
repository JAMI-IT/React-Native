import 'react-native-gesture-handler';
import React from 'react';
import Home from './Screens/Home';
import Colorpalatte from './Screens/Colorpalatte';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import ColorPalatteModel from './Screens/ColorPalatteModel';


const RootStack = createStackNavigator();
const MainStack = createStackNavigator();

const MainStackScreen = () => {
  return (
    <MainStack.Navigator>
      
      <MainStack.Screen name='Home' component={Home} />
      <MainStack.Screen name='Colorpalatte' component={Colorpalatte} options={({route})=>({title: route.params.paletteName})} />

    </MainStack.Navigator>
  )
}

const app = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator mode="modal">
        <RootStack.Screen
          name="Main"
          component={MainStackScreen}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name="ColorPalatteModel"
          component={ColorPalatteModel}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default app;