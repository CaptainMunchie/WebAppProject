import React from 'react';
import { View, StyleSheet } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import AppColors from '../config/AppColors';
// import AppIcon from '../components/AppIcon';
import AppListItem from '../components/AppListItem';
import AppScreen from '../components/AppScreen';
import AppIcon from '../components/AppIcon';
import AppText from '../components/AppText';




function HomeScreen({navigation, route}) {
    // console.log(route.params);
    return (
        <AppScreen style={styles.container}>
            {/* <AppText style={styles.message}>{route.params.message}</AppText> */}
            <View style={styles.welcomeContainer}>
                    <MaterialCommunityIcons
                        name="account"
                        size={68}
                        color={AppColors.black}
                    />

            </View>
            <View style={styles.ProfileContainer}>
                <AppListItem image={route.params.paramImage} title={route.params.paramName} subtitle={route.params.paramEmail}/>
            </View>
            <View style={styles.LinksContainer}>
                <AppListItem title="My Books" IconComponent={<AppIcon name="book-open-variant" size={50} iconColor={AppColors.otherColor} backgroundColor={AppColors.primaryColor}/> } onPress={() => navigation.navigate("Books")}/>
                <AppListItem title="My Authors" IconComponent={<AppIcon name="account-heart" size={50} iconColor={AppColors.otherColor} backgroundColor={AppColors.primaryColor}/> } onPress={() => navigation.navigate("MyAuthors")}/>
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
        // marginTop:0,
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
    },
    // message:{
    //     paddingTop:25,
    // }
})
export default HomeScreen;