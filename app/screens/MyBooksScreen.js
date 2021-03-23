import React from 'react';
import { StyleSheet, View } from 'react-native';

import AppCard from '../components/AppCard';
import AppScreen from '../components/AppScreen';
import AppColors from '../config/AppColors';

function MyBooksScreen(props) {
    return (
        <AppScreen style={styles.container}>
            <AppCard 
                title="Lofi Chill" 
                subtitle="Read on 3rd of March, 2021"
                image={require("../assets/cover1.jpg")}
                />
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: AppColors.otherColor,
        flex: 1,
        
    },
})

export default MyBooksScreen;