import React from 'react';
import { View, StyleSheet } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import AppColors from '../config/AppColors';
// import AppIcon from '../components/AppIcon';
import AppListItem from '../components/AppListItem';
import AppScreen from '../components/AppScreen';
import AppIcon from '../components/AppIcon';




function HomeScreen(props) {
    return (
        <AppScreen style={styles.container}>
            <View style={styles.welcomeContainer}>
                    <MaterialCommunityIcons
                        name="account"
                        size={68}
                        color={AppColors.black}
                    />

            </View>
            <View style={styles.ProfileContainer}>
                <AppListItem image={require("../assets/profile.jpg")} title="Medusa" subtitle="Medusa@gmail.com"/>
            </View>
            <View style={styles.LinksContainer}>
                <AppListItem title="My Books" IconComponent={<AppIcon name="book-open-variant" size={50} iconColor={AppColors.otherColor} backgroundColor={AppColors.primaryColor}/> }/>
                <AppListItem title="My Authors" IconComponent={<AppIcon name="account-heart" size={50} iconColor={AppColors.otherColor} backgroundColor={AppColors.primaryColor}/> }/>
            </View>
            {/* <AppIcon name="coffee" size={40} iconColor="black" backgroundColor="white"/> */}
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    container:{
        // flex: 1,
        backgroundColor: AppColors.otherColor,
        // padding:25,
        marginTop:0,
    },
    welcomeContainer:{
        
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
        
    },
    ProfileContainer:{
        marginTop: 50,
        height: 90,
        backgroundColor: AppColors.otherColorLite,
        justifyContent:"center",
    },
    LinksContainer:{
        marginVertical:75,
        backgroundColor: AppColors.otherColorLite,
        height:150,
        justifyContent:"space-around",
        paddingLeft: 10,
    }
})
export default HomeScreen;