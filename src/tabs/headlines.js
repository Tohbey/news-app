import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { 
    View,Text 
} from 'react-native'
import{
    fetchHeadlines
} from '../redux/actions/news'

const headlines = () => {
    const dispatch = useDispatch()
    const getHeadlines = () => dispatch(fetchHeadlines());

    useSelector(state => {
        console.log(state)
    })

    useEffect(() => {
        getHeadlines()
    }, [])

    return (
        <View>
            <Text>Headlines</Text>
        </View>
    )
}

export default headlines
