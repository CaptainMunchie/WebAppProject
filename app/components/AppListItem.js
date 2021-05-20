import React from 'react';
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import AppColors from '../config/AppColors';
import AppText from './AppText';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import AppIcon from './AppIcon';


function AppListItem({image, iconTitle, title, iconSubtitle, subtitle, IconComponent, onPress, onSwipLeft}) {
    return (
        <Swipeable renderRightActions={onSwipLeft}>
            <TouchableHighlight onPress={onPress} underlayColor={AppColors.otherColorLite}>
                <View style={styles.container}>
                    {IconComponent}
                    {image && <Image source={image} style={styles.image}/>}
                    <View style={styles.TextContainer}>
                        
                        {/* {icon && <AppIcon name={icon} iconColor={AppColors.black} style={styles.icon}/>} */}
                        <AppText style={styles.title}>
                            <AppText>{iconTitle && <MaterialCommunityIcons name={iconTitle} size={30}/>}  </AppText>
                                           
                            {title}
                        </AppText>
                        


                        {subtitle && <AppText style={styles.subtitle}>
                            <AppText>{iconSubtitle && <MaterialCommunityIcons name={iconSubtitle} size={30}/>}  </AppText>
                            {subtitle}
                        </AppText>}
                    </View>
                    
                </View>
            </TouchableHighlight>
        </Swipeable>
    );
}
const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        padding:10,
    },
    image:{
        height: 75,
        width: 75,
        borderRadius: 37,
        // marginRight: 20,
        marginLeft: 10,
    },
    TextContainer:{
        flexDirection: "column",
        marginLeft: 20,
        
    },
    title:{
        fontWeight:"bold",
        marginVertical:5,
        flexDirection:"row",
    },
    subtitle:{
        fontSize:15,
    },
    icon:{
        justifyContent: 'center',
        alignItems: 'center',
    }
})
export default AppListItem;