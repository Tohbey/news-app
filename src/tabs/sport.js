import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import { 
    View,Text, StyleSheet, ScrollView, FlatList
} from 'react-native'
import{
    fetchSportNews
} from '../redux/actions/news'
import Card from '../components/card';


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
            title={item.title} imageUrl={item.urlToImage} 
            publishedDate={item.publishedAt} description={item.description} 
        />
    );

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text>Sport World</Text>
                <FlatList 
                    data={sportNews}
                    renderItem={renderItem}
                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        padding: 10
    },
})

export default sport
