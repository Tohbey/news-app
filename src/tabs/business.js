import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { 
    View,Text, StyleSheet, ScrollView, FlatList
} from 'react-native'
import{
    fetchBusinessNews
} from '../redux/actions/news'
import Card from '../components/card';
import UUIDGenerator from 'react-native-uuid-generator';


const business = () => {
    let businessNews = []
    const dispatch = useDispatch()
    const getHeadlines = () => dispatch(fetchBusinessNews());

    useSelector(state => {
        businessNews = state.news.businessNews
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
            <Text>Business News</Text>
            <FlatList 
                data={businessNews}
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

export default business
