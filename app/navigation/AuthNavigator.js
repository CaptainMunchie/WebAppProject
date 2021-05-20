import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import HomeScreen from '../screens/HomeScreen';
import TabNavigator from './TabNavigator';
import MyBooksScreen from '../screens/MyBooksScreen';
import TravelSlideScreen from '../screens/TravelSlideScreen';



const AppStack = createStackNavigator();

const AuthNavigator = () => (
    <AppStack.Navigator>
        <AppStack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown:false}}/>
        <AppStack.Screen name="Login" component={LoginScreen} options={{title: 'Login Screen'}}/>
        <AppStack.Screen name="Register" component={RegisterScreen} options={{title: 'Register Screen'}}/>
        {/* <AppStack.Screen name="Home" component={HomeScreen} options={{title: 'Home Screen'}}/> */}
        <AppStack.Screen name="Home" component={TabNavigator} options={{headerShown:false}}/>
        <AppStack.Screen name="Travels" component={MyBooksScreen} options={{title: 'My Travels'}}/>
        <AppStack.Screen name="MoreInfo" component={TravelSlideScreen} options={{title: 'More Information'}}/>

    </AppStack.Navigator>
)

export default AuthNavigator;