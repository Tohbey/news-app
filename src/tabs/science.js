import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { 
    View,Text, ScrollView, FlatList, StyleSheet
} from 'react-native'
import{
    fetchScienceNews
} from '../redux/actions/news'
import Card from '../components/card';
import UUIDGenerator from 'react-native-uuid-generator';


const science = () => {
    let scienceNews = []
    const dispatch = useDispatch()
    const getHeadlines = () => dispatch(fetchScienceNews());

    useSelector(state => {
        scienceNews = state.news.scienceNews
    })

    useEffect(() => {
        getHeadlines()
    }, [])
    const renderItem = ({item}) => (
        <Card author={item.author} 
            title={item.title} imageUrl={item.urlToImage} key={UUIDGenerator.getRandomUUID()}
            publishedDate={item.publishedAt} description={item.description} 
        />
    );

    return (
        <View style={styles.container}>
            <Text>Science News</Text>
                <FlatList 
                    data={scienceNews}
                    renderItem={renderItem}
                    keyExtractor={item => item.key}
                />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding: 10
    },
})

export default science
