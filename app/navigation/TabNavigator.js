import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const AppTab = createBottomTabNavigator();

import HomeScreen from '../screens/HomeScreen';
import MyBooksScreen from '../screens/MyBooksScreen';
import NewBookScreen from '../screens/NewBookScreen';
import AppColors from '../config/AppColors';
import AppIcon from '../components/AppIcon';


const TabNavigator = () => (
    <AppTab.Navigator style={styles.container} tabBarOptions={{activeTintColor:AppColors.otherColor, activeBackgroundColor:AppColors.primaryColor}}>
        <AppTab.Screen name="Home" component={HomeScreen} options={{tabBarIcon: () => <AppIcon size={30} name="home" backgroundColor={AppColors.otherColor}/>}}/>
        <AppTab.Screen name="NewBooks" component={NewBookScreen} options={{tabBarIcon: () => <AppIcon size={30} name="plus-circle" backgroundColor={AppColors.otherColor}/>}}/>
        <AppTab.Screen name="MyBooks" component={MyBooksScreen} options={{tabBarIcon: () => <AppIcon size={30} name="book-open-variant" backgroundColor={AppColors.otherColor}/>}}/>
    </AppTab.Navigator>
)

const styles = StyleSheet.create({
    container:{
        fontSize:20,
        fontWeight:"bold",
    },
})

export default TabNavigator;