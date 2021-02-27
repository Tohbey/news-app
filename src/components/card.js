import React from 'react'
import { 
    View,Text, StyleSheet, Image 
} from 'react-native'
import{
    windowWidth
}from '../utils/dimensions'
import Moment from 'react-moment'
import 'moment-timezone'

const boxWidth = windowWidth-20
const smallBoxWidth = boxWidth-270
const bigBoxWidth = boxWidth-smallBoxWidth

const card = ({title, author, publishedDate, imageUrl, description}) => {
    return (
        <View style={styles.box}> 
            <Image style={styles.left} source={{uri: imageUrl}} />
            <View style={styles.right}>
                <Text numberOfLines={1} style={styles.title}>{title}</Text>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <Text numberOfLines={1} style={styles.author}>{author}</Text>
                        <Moment format="DD/MM/YYYY" element={Text} style={styles.date}>
                            {publishedDate}
                        </Moment>
                </View>
                <View style={{marginTop:10}} >
                    <Text numberOfLines={5}>{description}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    box:{
        width: boxWidth,
        height: 150,
        backgroundColor:'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
        marginTop: 5,
        marginBottom:10,
        flexDirection:'row'
    },
    left:{
        width: smallBoxWidth,
    },
    right:{
        width: bigBoxWidth,
        paddingLeft:5,
        paddingRight:5
    },
    title:{
        fontSize:16,
        // width:180,
        fontWeight:'bold',
        color:'black'
    },
    author:{
        fontSize:15,
        width:170,
        color:'grey'
    },
    date:{
        fontSize:13,
        width:100,
        color:'black'
    },
})

export default card
