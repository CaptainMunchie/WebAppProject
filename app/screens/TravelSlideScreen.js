import React from 'react';
import { FlatList, StyleSheet, View, Text, SearchBar, Image } from 'react-native';
import AppButton from '../components/AppButton';

import AppCard from '../components/AppCard';
import AppListItem from '../components/AppListItem';
import AppScreen from '../components/AppScreen';
import AppText from '../components/AppText';
import AppColors from '../config/AppColors';
import DataManager from '../config/DataManager';


function TravelSlideScreen({navigation, route}) {
    console.log(route.params.params.param.image)
    return(
        <AppScreen style={styles.container}>
            <View style={styles.item}>
                {/* {Image && <Image source={route.params.image} style={styles.image}/>} */}
                {isFinite(route.params.params.param.image)? <Image source={route.params.params.param.image} style={styles.image}/> : <Image source={{uri: route.params.params.param.image}} style={styles.image}/>}
                <Text style={styles.title}>{route.params.params.param.title}</Text>
                <Text style={{fontWeight: "bold", fontSize: 20, paddingBottom: 10}}>Description:</Text>
                <Text style={styles.subtitle}>{route.params.params.param.subtitle}</Text>
                <Text style={{fontWeight: "bold", fontSize: 20, paddingBottom: 10}}>Category:</Text>
                <Text style={styles.subtitle}>{route.params.params.param.category}</Text>
            </View>
        </AppScreen>
    )

}

const styles = StyleSheet.create({
    container:{
        backgroundColor: AppColors.otherColor,
        flex: 1,
        marginTop: 0,
    },
    item:{
        padding:10,
    },
    image:{
        width:"100%",
        height:250,
        borderRadius: 20,

    },
    title:{
        textAlign:"center",
        fontSize: 30,
        fontWeight: "bold",
        // backgroundColor: "white",
    },
    subtitle:{
        fontSize: 16,
        paddingBottom: 10
    }
    
})

export default TravelSlideScreen;