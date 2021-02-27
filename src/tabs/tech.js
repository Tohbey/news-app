import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import { 
    View,Text, ScrollView, FlatList, StyleSheet
} from 'react-native'
import{
    fetchTechNews
} from '../redux/actions/news'
import Card from '../components/card';
import UUIDGenerator from 'react-native-uuid-generator';


const tech = () => {
    let techNews = []
    const dispatch = useDispatch()
    const getHeadlines = () => dispatch(fetchTechNews());

    useSelector(state => {
        techNews = state.news.techNews
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
            <Text>Tech News</Text>
                <FlatList 
                    data={techNews}
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


export default tech
