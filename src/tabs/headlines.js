import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { 
    View,Text, ScrollView, FlatList, StyleSheet
} from 'react-native'
import{
    fetchHeadlines
} from '../redux/actions/news'
import Card from '../components/card';
import UUIDGenerator from 'react-native-uuid-generator';

const headlines = () => {
    let headlinesNews = []
    const dispatch = useDispatch()
    const getHeadlines = () => dispatch(fetchHeadlines());

    useSelector(state => {
        headlinesNews = state.news.generalNews
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
                        data={headlinesNews}
                        renderItem={renderItem}
                        keyExtractor={item => UUIDGenerator.getRandomUUID()}
                    />
            </View>
            {UUIDGenerator.getRandomUUID((uuid) => {
                console.log(uuid);
            })}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        padding: 10
    },
})

export default headlines
