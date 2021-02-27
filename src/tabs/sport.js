import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import { 
    View,Text, StyleSheet, ScrollView, FlatList
} from 'react-native'
import{
    fetchSportNews
} from '../redux/actions/news'
import Card from '../components/card';
import UUIDGenerator from 'react-native-uuid-generator';


const sport = () => {
    let sportNews = []
    const dispatch = useDispatch()
    const getHeadlines = () => dispatch(fetchSportNews());

    useSelector(state => {
        sportNews = state.news.sportNews
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
            <Text>Sport News</Text>
            <FlatList 
                data={sportNews}
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

export default sport
