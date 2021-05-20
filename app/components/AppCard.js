import React from 'react';
import { StyleSheet, View, Image, TouchableHighlight } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import AppColors from '../config/AppColors';
import AppText from '../components/AppText';

function AppCard({category, title, subtitle, image, onPress, onSwipLeft}) {
    return (
        <Swipeable renderRightActions={onSwipLeft}>
            <TouchableHighlight onPress={onPress} underlayColor={AppColors.otherColorLite}>
                <View style={styles.container}>
                    {isFinite(image)? <Image source={image} style={styles.image}/> : <Image source={{uri: image}} style={styles.image}/>}
                    <AppText style={styles.title}>{title}</AppText>
                    <AppText style={styles.subtitle}>{subtitle}</AppText>
                    <AppText style={styles.subtitle}>{category}</AppText>
                </View>
            </TouchableHighlight>
        </Swipeable>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: AppColors.otherColorLite,
        borderRadius:20,
        overflow:"hidden",
        marginBottom: 25,
        

    },
    image:{
        height:200,
        width: "100%",
    },
    title:{
        fontWeight:"bold",
    },
    subtitle:{
        fontSize: 16,
    },
})
export default AppCard;