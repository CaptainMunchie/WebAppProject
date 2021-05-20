import React from 'react';

import { StyleSheet, Text, Platform } from 'react-native';

function AppText({style, children}) {
    return (
        <Text style={[styles.text, style]}>{children}</Text>
    );
}

const styles = StyleSheet.create({
    text:{
        fontSize: 20,
        fontFamily: Platform.OS ==='android' ? "monospace" : "Cochin",
        paddingLeft:10,
        justifyContent:"center",
        alignItems:"center",
        
        
    },  
})

export default AppText;