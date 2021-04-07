import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import AppCard from '../components/AppCard';
import AppScreen from '../components/AppScreen';
import AppText from '../components/AppText';
import AppColors from '../config/AppColors';
import DataManager from '../config/DataManager';

const getBooks = () => {
    let commonData = DataManager.getInstance();
    let user = commonData.getUserID();
    return commonData.getBooks(user);
}

function MyBooksScreen(props) {
    const bookList = getBooks();
    console.log(bookList);
    getBooks();
    return (
        <AppScreen style={styles.container}>
            <FlatList
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
            />

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
        padding:10,
        // marginTop: 0,
    },
})

export default MyBooksScreen;