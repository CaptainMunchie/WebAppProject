import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import MyBooksScreen from '../screens/MyBooksScreen';
import HomeScreen from '../screens/HomeScreen';
import MyAuthorScreen from '../screens/MyAuthorScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import NewBookScreen from '../screens/NewBookScreen';
import TravelSlideScreen from '../screens/TravelSlideScreen';

const AppStack = createStackNavigator();

const HomeNavigator = () => (
    <AppStack.Navigator mode="modal">
        {/* <AppStack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown:false}}/> */}
        <AppStack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
        <AppStack.Screen name="Travels" component={MyBooksScreen}/>
        <AppStack.Screen name="MyAuthors" component={MyAuthorScreen}/>
        <AppStack.Screen name="NewItem" component={NewBookScreen}/>
        <AppStack.Screen name="MoreInfo" component={TravelSlideScreen}/>
        
    </AppStack.Navigator>
)

export default HomeNavigator;