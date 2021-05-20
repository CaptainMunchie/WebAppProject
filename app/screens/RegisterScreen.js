import React, {useState} from 'react';
import { View, StyleSheet,TextInput } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
// import {Formik} from 'formik';

import AppColors from '../config/AppColors';
import AppScreen from '../components/AppScreen';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';



function RegisterScreen(props) {

    const [userName, setUserName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    

    return (
        <AppScreen style={styles.container}>
            <View style={styles.welcomeContainer}>
                    <MaterialCommunityIcons
                        name="account"
                        size={68}
                        color={AppColors.black}
                    />

            </View>
            
            <View style={styles.textInputContainer}>
                <AppTextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="account" 
                    placeholder="Full Name" 
                    textContentType="emailAddress"
                    onChangeText = {inputInputName => setUserName(inputInputName)}
                />
                <AppTextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="email" 
                    placeholder="Email Address" 
                    keyboardType="email-address"
                    textContentType="emailAddress"
                    onChangeText = {inputInputEmail => setEmail(inputInputEmail)}
                />
                <AppTextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="lock" 
                    placeholder="Password" 
                    secureTextEntry
                    textContentType="password"
                    onChangeText = {inputInputPassword => setPassword(inputInputPassword)}
                />
            </View>
            <AppButton title="login" onPress={() => console.log(userName, email, password)}/>
        </AppScreen>
// function RegisterScreen(props) {

//     const [userName, setUserName] = useState();
//     const [email, setEmail] = useState();
//     const [password, setPassword] = useState();

    
//     const initialValues = {
//         userName:'',
//         email: '',
//         password: '',
//         confirmPassword: '',
//     }

//     const validationSchema = Yup.object({
//         userName: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
//         email: Yup.string().email('Invalid email format').required('Required'),
//         password: Yup.string().required('Required'),
//         // confirmPassword: Yup.string().oneOf([Yup.ref('password'), ''], 'Passwords must math').required('Required')

//     })

//     const onSubmit = values => {
//         console.log('Form data', values)
//     }
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: AppColors.otherColor,
        padding:25,
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

export default RegisterScreen;