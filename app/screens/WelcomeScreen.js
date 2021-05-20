import React from 'react';
import {View, StyleSheet, ImageBackground, Platform } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';

import AppScreen from '../components/AppScreen';
import AppText from '../components/AppText';
import AppColors from '../config/AppColors';
import AppButton from '../components/AppButton';


const blurRadiusValue = Platform.OS === 'android'? 0.2:5.5;

function WelcomeScreen({navigation}) {
    return (
        <AppScreen>
            <ImageBackground
            source={require("../assets/background2.jpg")}
            style={styles.background}
            blurRadius={blurRadiusValue}
            >

                <View style={styles.welcomeContainer}>
                    <MaterialCommunityIcons
                        name="map"
                        size={68}
                        color={AppColors.black}
                    />

                    <AppText style={{color:"black", fontSize:30, fontWeight:"bold"}}>Personal Exploration</AppText>

                </View>

                <View style={styles.bottonsContainer}>
                    <AppButton title="login" color="green"  onPress={() => navigation.navigate("Login")}/>
                    <AppButton title="Register" color="brown" onPress={() => navigation.navigate("Register")}/>

                </View>
                

            </ImageBackground>
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    background:{
        flex:1,
    },
    welcomeContainer:{
        
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
        
    },
    bottonsContainer:{
        // backgroundColor: 'red',
        marginTop: 200,
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: 150,
        alignSelf: 'center',
        // alignSelf: 'flex-end',
        width: '50%',
    }
})

export default WelcomeScreen;