import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {Formik} from 'formik';
import * as Yup from 'yup';

import AppColors from '../config/AppColors';
import AppScreen from '../components/AppScreen';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import AppText from '../components/AppText';
import DataManager from '../config/DataManager';


const validation = Yup.object().shape(
    {
        email: Yup.string().required().email().label("Email"),
        password: Yup.string().required().min(4).max(8).label("Password"),
    }
);

const users = [
    {
        id: "user1",
        name: "Medusa Gorgon",
        email: "medusa@gmail.com",
        password: "1234",
        image: require('../assets/profile.jpg')
    },
    {
        id: "user2",
        name: "Spartan Soldier",
        email: "spartan@gmail.com",
        password: "1234",
        image: require('../assets/profile1.jpg')
    },

];

const validateUser = ({email, password}) => {
    return users.filter((user) => user.email === email && user.password === password).length>0
    
};

const getUser = ({email}) => {
    return users.find((user) => user.email === email);
}

const createUser = ({email}) => {
    let commonData = DataManager.getInstance();
    let userID = getUser({email}).id;
    commonData.setUserID(userID);

}

function LoginScreen({navigation}) {


    return (
        <AppScreen style={styles.container}>
            <View style={styles.welcomeContainer}>
                    <MaterialCommunityIcons
                        name="account"
                        size={68}
                        color={AppColors.black}
                    />

            </View>
            <Formik
                initialValues={{email:'', password:'',}}
                onSubmit = {(values, {resetForm}) => {
                            if(validateUser(values)){
                            console.log(getUser(values));
                            resetForm();
                            createUser(values);
                            navigation.navigate("Home", {
                                screen: "Home",
                                params: {
                                    screen: "Home",
                                    params: {
                                        paramEmail: values.email,
                                        paramName: getUser(values).name,
                                        paramImage: getUser(values).image,
                                    },
                                    
                                }
                            });
                        } 
                        else{
                            resetForm();
                            alert("Invalid Login Details")
                        }
                    }}
                validationSchema={validation}
            >
                {({values, handleChange, handleSubmit, errors, setFieldTouched, touched}) => (
                    <>
                        <View style={styles.textInputContainer}>
                            <AppTextInput
                                autoCapitalize="none"
                                autoCorrect={false}
                                icon="email" 
                                placeholder="Email Address" 
                                keyboardType="email-address"
                                textContentType="emailAddress"
                                value={values.email}
                                onBlur = {() => setFieldTouched("email")}
                                onChangeText = {handleChange("email")}
                            />
                            {touched.email && <AppText style={{color:"red", fontSize:15}}>{errors.email}</AppText>}
                            <AppTextInput
                                autoCapitalize="none"
                                autoCorrect={false}
                                icon="lock" 
                                placeholder="Password" 
                                secureTextEntry
                                textContentType="password"
                                value={values.password}
                                onBlur = {() => setFieldTouched("password")}
                                onChangeText = {handleChange("password")}
                            />
                            {touched.password && <AppText style={{color:"red", fontSize:15}}>{errors.email}</AppText>}
                        </View>
                        <AppButton title="login" onPress={handleSubmit}/>
                    </>

                )}
                
            </Formik>
            
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: AppColors.otherColor,
        padding:25,
        marginTop:0,
    },
    welcomeContainer:{
        
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
        
    },
    textInputContainer:{
        marginTop: 40,
        marginBottom: 20,
    }
})

export default LoginScreen;