import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import OnBoardScreen from './app/screens/OnBoardScreen';
import SignInScreen from './app/screens/SignInScreen';
import SignUpScreen from './app/screens/SignUpScreen';
import registration from './app/screens/registration';
import HomeScreen from '../final_project/app/screens/HomeScreens';
import DetailsSceeen from '../final_project/app/screens/DetailsScreen';
import ThankyouScreen from '../final_project/app/screens/ThankyouScreen';
import {StatusBar} from 'react-native';
import COLORS from '../final_project/app/consts/colors';

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.white} />
      <Stack.Navigator screenOptions={{header: () => null}}>
        <Stack.Screen name="BoardScreen" component={OnBoardScreen} />
        <Stack.Screen name="Signinscreen" component={SignInScreen} />
        <Stack.Screen name="SignUpscreen" component={SignUpScreen} />
        <Stack.Screen name="reg" component={registration} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsSceeen} />
        <Stack.Screen name="Thank" component={ThankyouScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
