import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, Image } from 'react-native';
import AppButton from '../components/AppButton';
import AppPicker from '../components/AppPicker';
import AppScreen from '../components/AppScreen';
import AppText from '../components/AppText';
import AppTextInput from '../components/AppTextInput';
import AppColors from '../config/AppColors';
import DataManager from '../config/DataManager';
import * as ImagePicker from 'expo-image-picker';
import AppIcon from '../components/AppIcon';

const categories = [
    {label: "Travel", value:1, icon:"airplane-takeoff", backgroundColor:"red"},
    {label: "Eating", value:2, icon:"food", backgroundColor:"blue"},
    {label: "Discovery", value:3, icon:"magnify", backgroundColor:"green"},

];


function NewBookScreen({navigation}) {
    const [title, setTitle] = useState("");
    const [subTitle, setSubTitle] = useState("");
    const [category, setCategory] = useState("");
    const [image, setImage] = useState(null);

    const [titleError, setTitleError] = useState("");
    const [subTitleError, setSubTitleError] = useState("");
    const [categoryError, setCategoryError] = useState("");
    const [imageError, setImageError] = useState("");

    let openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (permissionResult.granted === false) {
            alert("Permission to access camera roll is required");
            return;
        }

        let pickerResult = await ImagePicker.launchImageLibraryAsync();

        if(pickerResult.cancelled ===  true) {
            return;
        }

        setImage({path: pickerResult.uri});

        console.log(pickerResult);
    }

    const doErrorCheck = () => {
        // console.log(title, subTitle, category.label)
        setTitleError( title.length>0 ? "": "PLease set a valid Title");
        setSubTitleError( subTitle.length>0 ? "": "PLease set a valid subtitle");
        setCategoryError( category? "": "PLease pick a category from the list");
        setImageError( image? "": "PLease pick an image");
        return ((title.length>0) && (subTitle.length>0) && (category) && (image)? true: false)
    }

    const addBook = () => {
        let commonData = DataManager.getInstance();
        let user = commonData.getUserID();

        const books = commonData.getBooks(user);
        const bookID = books.length+1;
        const newBook ={
            title: title,
            subtitle: subTitle,
            category: category.label,
            id: bookID,
            userid: user,
            image: image.path,

        };

        console.log(newBook);
        commonData.addBook(newBook);

        // commonData.setUserID(userID);
    }

    return (
        <AppScreen style={{backgroundColor:AppColors.otherColor, padding:10,}}>
            <AppTextInput
                icon="map"
                placeholder="Title"
                value={title}
                onChangeText={(inputText) => setTitle(inputText)}
            />

            {titleError.length>0 ? <AppText style={{margin:5, color:"red", fontsize:16}}>{titleError}</AppText>: <></>}

            <AppTextInput
                icon="note"
                placeholder="description"
                value={subTitle}
                onChangeText={(inputText) => setSubTitle(inputText)}
            />

            {subTitleError.length>0 ? <AppText style={{margin:5, color:"red", fontsize:16}}>{subTitleError}</AppText>: <></>}

            <AppPicker
                selectedItem={category}
                onSelectItem={item => setCategory(item)} 
                data={categories} 
                icon="apps" 
                placeholder="Categories" 
                numColumns={3}
            />

            {categoryError.length>0 ? <AppText style={{margin:5, color:"red", fontsize:16}}>{categoryError}</AppText>: <></>}
            
            <TouchableOpacity style={styles.imageButton} onPress={openImagePickerAsync}>
                <AppIcon
                    name="camera"
                    size={80}
                    iconColor={AppColors.otherColor}
                    backgroundColor={AppColors.primaryColor}
                />
                {image && <Image source={{uri: image.path}} style={{height:80, width:80, marginLeft: 20,}}/>}
            </TouchableOpacity>

            {imageError.length>0 ? <AppText style={{margin:5, color:"red", fontsize:16}}>{imageError}</AppText>: <></>}

            <AppButton
                title="Add Location"
                onPress={
                    () => {
                    if(doErrorCheck()){
                        addBook();
                        navigation.navigate("Travels");
                    }
                    
                }      
            }/>
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    imageButton:{
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row",
        marginBottom:30,
    }
})

export default NewBookScreen;