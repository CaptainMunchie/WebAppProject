import React, {useState} from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AppIcon from '../components/AppIcon';


import AppListItem from '../components/AppListItem';
import AppScreen from '../components/AppScreen';
import AppColors from '../config/AppColors';


const initialAuthorList = [
    {
        id:1,
        name:"Jane Harp",
        image: require("../assets/profile.jpg"),
    },
    {
        id:2,
        name:"J.k.Rowling",
        image: require("../assets/profile.jpg"),
    },
]


function MyAuthorScreen(props) {

    const[refreshing, setRefreshing] = useState(false);
    const[authors, setAuthors] = useState(initialAuthorList);

    const handleDelete = (author) => {
        const newAuthorList = authors.filter(item => item.id !== author.id);
        setAuthors(newAuthorList);
    }

    return (
        <AppScreen style={styles.container}>
            <FlatList
                data={authors}
                keyExtractor = {author => author.id.toString()}
                refreshing={refreshing}
                onRefresh={() => setAuthors(initialAuthorList)}
                renderItem ={({item}) => 
                    <AppListItem 
                        title={item.name}
                        image={item.image}
                        onPress={() => console.log(item)}
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
                ItemSeparatorComponent = { () =>
                    <View style={styles.seperator}/>
                }
            />
        </AppScreen>
    );
}
const styles = StyleSheet.create({
    container:{
        backgroundColor: AppColors.otherColor,
        flex: 1,
    },
    seperator:{
        width:"100%",
        height:2,
        backgroundColor: AppColors.secondaryColor,
    },
    deleteView:{
        backgroundColor:AppColors.secondaryColor,
        width:75,
        justifyContent:"center",
        alignItems:"center",
    } 
})
export default MyAuthorScreen;