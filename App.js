import React from 'react';
import NewBookScreen from './app/screens/NewBookScreen';

// import MyAuthorScreen from './app/screens/MyAuthorScreen';
// import MyBooksScreen from './app/screens/MyBooksScreen';
import {NavigationContainer} from '@react-navigation/native'
import AuthNavigator from './app/navigation/AuthNavigator';
import TabNavigator from './app/navigation/TabNavigator';

// import RegisterScreen from './app/screens/RegisterScreen';
// import LoginScreen from './app/screens/LoginScreen';
// import TestScreen from './app/screens/TestScreen';

// import HomeScreen from './app/screens/HomeScreen';


// import WelcomeScreen from './app/screens/WelcomeScreen';
// import { StyleSheet, Text} from 'react-native';
// import AppButton from './app/components/AppButton';
// import AppText from './app/components/AppText';
// import AppColors from './app/config/AppColors';
// import {MaterialCommunityIcons} from '@expo/vector-icons';
// import AppScreen from './app/components/AppScreen';



export default function App() {
  return (
    // <NewBookScreen/>
    // <HomeScreen/>
    // <MyBooksScreen/>
    // <MyAuthorScreen/>
    <NavigationContainer>
      <AuthNavigator/>
    </NavigationContainer>

    // <RegisterScreen></RegisterScreen>
    // <LoginScreen></LoginScreen>
    // <WelcomeScreen></WelcomeScreen>
    // <TestScreen></TestScreen>

    // <AppScreen style={styles.container}>
    //   <MaterialCommunityIcons
    //   name="account"
    //   size={68}
    //   color={AppColors.primaryColor}
    //   />
    //   <AppText>Hello World!</AppText>
    //   <Text>Hello World!</Text>
    //   <AppButton title="Click here"></AppButton>

    // </AppScreen>
    
    // <View style={styles.container}>
    //   <MaterialCommunityIcons
    //   name="account"
    //   size={68}
    //   color={AppColors.primaryColor}
    //   />
    //   <AppText>Hello World!</AppText>
    //   <Text>Hello World!</Text>
    //   <AppButton title="Click here"></AppButton>

    // </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: AppColors.otherColor,
//     alignItems: 'center',
//     justifyContent: 'center',
    
//   },

// });
