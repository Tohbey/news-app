import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import { 
    View,Text, ScrollView, FlatList, StyleSheet
} from 'react-native'
import{
    fetchTechNews
} from '../redux/actions/news'
import Card from '../components/card';

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
            title={item.title} imageUrl={item.urlToImage} 
            publishedDate={item.publishedAt} description={item.description} 
        />
    );

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text>Headlines</Text>
                    <FlatList 
                        data={techNews}
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


export default tech
