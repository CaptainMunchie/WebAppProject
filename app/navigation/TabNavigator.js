import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const AppTab = createBottomTabNavigator();

import HomeScreen from '../screens/HomeScreen';
import MyBooksScreen from '../screens/MyBooksScreen';
import NewBookScreen from '../screens/NewBookScreen';
import AppColors from '../config/AppColors';
import AppIcon from '../components/AppIcon';
import HomeNavigator from './HomeNavigator';
import WelcomeScreen from '../screens/WelcomeScreen';
import { createStackNavigator } from '@react-navigation/stack';


const TabNavigator = () => (
    <AppTab.Navigator style={styles.container} tabBarOptions={{activeTintColor:AppColors.otherColor, activeBackgroundColor:AppColors.primaryColor}}>
        <AppTab.Screen name="Home" component={HomeNavigator} options={{tabBarIcon: () => <AppIcon size={30} name="home" backgroundColor={AppColors.otherColor}/>}}/>
        <AppTab.Screen name="New Travels" component={NewBookScreen} options={{tabBarIcon: () => <AppIcon size={30} name="plus-circle" backgroundColor={AppColors.otherColor}/>}}/>
        <AppTab.Screen name="My Travels" component={MyBooksScreen} options={{tabBarIcon: () => <AppIcon size={30} name="map" backgroundColor={AppColors.otherColor}/>}}/>
    </AppTab.Navigator>

    
)


// function App() {
//     return (
//         <Stack.Navigator>
//           <Stack.Screen name="Home" component={HomeScreen} />
//           <Stack.Screen name="Welcome" component={WelcomeScreen} />
//         </Stack.Navigator>
//       );
// }

const styles = StyleSheet.create({
    container:{
        fontSize:20,
        fontWeight:"bold",
    },
})

export default TabNavigator;