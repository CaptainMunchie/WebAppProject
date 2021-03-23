import React, {useState} from 'react';
import { View, Switch } from 'react-native';

function TestScreen(props) {

    const [isEnable, setIsEnable] = useState(false)
    
    return (
        <View style={{flex:1,marginTop:100,}}>
            <Switch value={isEnable} onValueChange={
                (input => setIsEnable(input))
            }/>
        </View>
    );
}

export default TestScreen;
