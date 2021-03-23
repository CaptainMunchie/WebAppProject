import React, { useState } from 'react';
import AppPicker from '../components/AppPicker';
import AppScreen from '../components/AppScreen';
import AppColors from '../config/AppColors';

const Categories = [
    {label: "Adventure", value:1, icon:"airplane-takeoff", backgroundColor:"red"},
    {label: "Thriller", value:2, icon:"ghost", backgroundColor:"blue"},
    {label: "Fiction", value:3, icon:"flash", backgroundColor:"green"},

];



function NewBookScreen(props) {

    const [Category, setCategory] = useState();

    return (
        <AppScreen style={{backgroundColor:AppColors.otherColor}}>
            <AppPicker
                selectedItem={Category}
                onSelectItem={item => setCategory(item)} 
                data={Categories} 
                icon="apps" 
                placeholder="Categories" 
                numColumns={3}
            />
        </AppScreen>
    );
}


export default NewBookScreen;