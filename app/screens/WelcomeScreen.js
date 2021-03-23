import React from 'react';
import {View, StyleSheet, ImageBackground, Platform } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native'

import AppScreen from '../components/AppScreen';
import AppText from '../components/AppText';
import AppColors from '../config/AppColors';
import AppButton from '../components/AppButton';


const blurRadiusValue = Platform.OS === 'android'? 0.2:5.5;

function WelcomeScreen({navigation}) {
    return (
        <AppScreen>
            <ImageBackground
            source={require("../assets/background.jpg")}
            style={styles.background}
            blurRadius={blurRadiusValue}
            >

                <View style={styles.welcomeContainer}>
                    <MaterialCommunityIcons
                        name="account"
                        size={68}
                        color={AppColors.white}
                    />

                    <AppText style={{color:"white", fontSize:30}}>Night Cafe Chill</AppText>

                </View>

                <View style={styles.bottonsContainer}>
                    <AppButton title="login" onPress={() => navigation.navigate("Login")}/>
                    <AppButton title="Register" color="secondaryColor" onPress={() => navigation.navigate("Register")}/>

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