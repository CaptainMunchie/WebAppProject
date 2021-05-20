import React, {useState} from 'react';
import { FlatList, StyleSheet, View, Text, SearchBar, TouchableOpacity } from 'react-native';
import AppIcon from '../components/AppIcon';

import AppButton from '../components/AppButton';

import AppCard from '../components/AppCard';
import AppListItem from '../components/AppListItem';
import AppScreen from '../components/AppScreen';
import AppText from '../components/AppText';
import AppColors from '../config/AppColors';
import DataManager from '../config/DataManager';
import AppPicker from '../components/AppPicker';
import AppTextInput from '../components/AppTextInput';

const categories = [
    {label: "Travel", value:1, icon:"airplane-takeoff", backgroundColor:"red"},
    {label: "Eating", value:2, icon:"food", backgroundColor:"blue"},
    {label: "Discovery", value:3, icon:"magnify", backgroundColor:"green"},

];

const getBooks = () => {
    let commonData = DataManager.getInstance();
    let user = commonData.getUserID();
    return commonData.getBooks(user);
}

function MyBooksScreen({navigation, route, handleSubmit}) {
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    
    const bookList = getBooks();
    // console.log(bookList);
    getBooks();

    const[refreshing, setRefreshing] = useState(false);
    const[books, setBooks] = useState(bookList);

    const handleDelete = (book) => {
        const newBookList = books.filter((item) => item.id !== book.id);
        setBooks(newBookList);
        // console.log(newBookList);
        // console.log(book.id);
        // console.log(newBookList[0].id);
    }

    return (
        <AppScreen style={styles.container}>
            <View style={styles.ProfileContainer}>
                <AppTextInput
                    icon="magnify"
                    placeholder="Search..."
                    value={title}
                    onChangeText={(inputText) => setTitle(inputText)}
                />
                <AppPicker
                    selectedItem={category}
                    onSelectItem={item => setCategory(item)} 
                    data={categories} 
                    icon="apps" 
                    placeholder="Categories" 
                    numColumns={3}
                />
                {/* <AppButton  title="+ Add Item" onPress={() => navigation.navigate("NewItem")}/>          */}
            </View>
            <FlatList style={styles.Slides}
                data={books}
                keyExtractor = {(book) => book.id.toString()}
                refreshing={refreshing}
                onRefresh={() => setBooks(bookList)}
                renderItem ={({item}) => 
                <AppCard 
                    
                    title={item.title}
                    subtitle={item.subtitle}
                    image={item.image}
                    category={item.category}
                    onPress={() => navigation.navigate('MoreInfo', {screen: 'MoreInfo', params: {param:item}})}
                    // onPress={() => console.log(item)}
                         
                            onSwipLeft={ () => 
                                (
                                <View style={styles.deleteView}>
                                    <TouchableOpacity onPress={() => handleDelete(item)}>
                                        <AppIcon name="trash-can" iconColor={AppColors.otherColor} backgroundColor={AppColors.primaryColor}/>
                                    </TouchableOpacity>
                                </View>
                                )
                            }
                       
                    />}
                
            />
            {/* <FlatList style={styles.Slides}
                data={bookList}
                keyExtractor = {book => book.bookid.toString()}
                renderItem = {({item}) => 
                    <AppCard
                        title={item.title}
                        subtitle={item.subtitle}
                        image={item.image}
                        category={item.category}
                    />
                }
            /> */}

            {/* <AppCard 
                title="Lofi Chill" 
                subtitle="Read on 3rd of March, 2021"
                image={require("../assets/cover1.jpg")}
                /> */}
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: AppColors.otherColor,
        flex: 1,
        // marginTop: 0,
        
    },
    ProfileContainer:{
        // marginTop: 50,
        height: 150,
        backgroundColor: AppColors.otherColorLite,
        justifyContent:"center",
        // padding: 10,
        paddingHorizontal:10,
        marginVertical:0,
    },
    Slides:{
        // paddingTop:10,
        padding:10,
        
    },
    // seperator:{
    //     width:"100%",
    //     height:2,
    //     backgroundColor: AppColors.secondaryColor,
    // },
    deleteView:{
        // backgroundColor:AppColors.secondaryColor,
        width:75,
        justifyContent:"center",
        alignItems:"center",
    } 
})

export default MyBooksScreen;