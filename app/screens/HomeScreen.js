import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import AppColors from '../config/AppColors';
// import AppIcon from '../components/AppIcon';
import AppListItem from '../components/AppListItem';
import AppScreen from '../components/AppScreen';
import AppIcon from '../components/AppIcon';
import AppText from '../components/AppText';
import AppButton from '../components/AppButton';




function HomeScreen({navigation, route, handleSubmit}) {
    // console.log(route.params);
    return (
        <AppScreen style={styles.container}>
            {/* <AppText style={styles.message}>{route.params.message}</AppText> */}
            {/* <View style={styles.welcomeContainer}>
                    <MaterialCommunityIcons
                        name="account"
                        size={68}
                        color={AppColors.black}
                    />

            </View> */}
            <View style={styles.ProfileContainer}>
                <AppListItem image={route.params.paramImage} iconTitle="account" title={route.params.paramName} iconSubtitle="email" subtitle={route.params.paramEmail}/>
                <View style={styles.Button}>
                    <AppButton  title="Logout" onPress={() => navigation.navigate("Welcome")}/>
                    <View style={{paddingBottom:10, paddingLeft:20, width:300, flexDirection:"column"}}>
                        <Text style={{fontWeight:"bold", fontSize:15}}>Description:</Text>
                        <Text>{route.params.paramDescription}</Text>
                        
                    </View>
                </View>
                
            </View>
            
            <View style={styles.LinksContainer}>
                <AppListItem title="My Travels" IconComponent={<AppIcon name="map" size={50} iconColor={AppColors.otherColor} backgroundColor={AppColors.primaryColor}/> } onPress={() => navigation.navigate("Travels")}/>                
            </View>
            {/* <View style={styles.LinksContainer}>                
                <AppListItem title="My Authors" IconComponent={<AppIcon name="account-heart" size={50} iconColor={AppColors.otherColor} backgroundColor={AppColors.primaryColor}/> } onPress={() => navigation.navigate("MyAuthors")}/>
            </View> */}
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
        // marginTop: 50,
        height: "auto",
        backgroundColor: AppColors.otherColorLite,
        justifyContent:"center",
    },
    LinksContainer:{
        // marginVertical:5,
        marginTop: 10,
        marginHorizontal: 10,
        backgroundColor: AppColors.otherColorLite,
        height:"auto",
        borderRadius: 20,
        justifyContent:"space-around",
        paddingLeft: 10,
    },
    Button:{
        flexDirection: "row",
        alignContent: "space-between",
        flexWrap:"wrap",
        flexBasis: "auto",
        paddingLeft: 15,
        // paddingHorizontal: 20,
        // paddingVertical: 5,
    },
    // message:{
    //     paddingTop:25,
    // }
})
export default HomeScreen;