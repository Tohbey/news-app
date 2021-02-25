import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { 
    View,Text, ScrollView, FlatList, StyleSheet
} from 'react-native'
import{
    fetchScienceNews
} from '../redux/actions/news'
import Card from '../components/card';

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
            title={item.title} imageUrl={item.urlToImage} 
            publishedDate={item.publishedAt} description={item.description} 
        />
    );

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text>Headlines</Text>
                    <FlatList 
                        data={scienceNews}
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

export default science
