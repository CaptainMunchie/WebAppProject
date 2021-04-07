import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import MyBooksScreen from '../screens/MyBooksScreen';
import HomeScreen from '../screens/HomeScreen';
import MyAuthorScreen from '../screens/MyAuthorScreen';



const AppStack = createStackNavigator();

const HomeNavigator = () => (
    <AppStack.Navigator mode="modal">
        <AppStack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
        <AppStack.Screen name="Books" component={MyBooksScreen}/>
        <AppStack.Screen name="MyAuthors" component={MyAuthorScreen}/>
    </AppStack.Navigator>
)

export default HomeNavigator;