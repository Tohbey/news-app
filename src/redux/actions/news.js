import {
    FETCH_FAILURE, 
    FETCH_REQUEST, 
    GET_BUSINESS, 
    GET_HEADLLINES,
    GET_SCIENCE, 
    GET_SPORTS,GET_TECH
} from '../actionTypes/news';
import Client from '../../services/HTTPClient';
import{
   BASE_URL, 
   BASE_URL_BUSINESS, 
   BASE_URL_GENERAL, 
   BASE_URL_SCIENCE, 
   BASE_URL_SPORTS, 
   BASE_URL_TECH
} from '../../utils/constant';


export const fetchRequest = () => {
    return{
        type: FETCH_REQUEST
    }
}

export const fetchFailure = (error) => {
    return{
        type: FETCH_FAILURE,
        payload: error
    }
}

export const getBusinessNews = (businessNews) => {
    return{
        type: GET_BUSINESS,
        payload: businessNews
    }
}

export const getSportNews = (sportNews) => {
    return{
        type: GET_SPORTS,
        payload: sportNews
    }
}

export const getGeneralNews = (generalNews) => {
    return{
        type: GET_HEADLLINES,
        payload: generalNews
    }
}

export const getTechNews = (techNews) => {
    return{
        type: GET_TECH,
        payload: techNews
    }
}

export const getScienceNews = (scienceNews) => {
    return{
        type: GET_SCIENCE,
        payload: scienceNews
    }
}

export const fetchHeadlines = () => async(dispatch) => {
    dispatch(fetchRequest())
    try {
        const client = new Client(BASE_URL)

        const res = await client.get(BASE_URL_GENERAL)
        dispatch(getGeneralNews(res.articles))
    } catch (error) {
        dispatch(fetchFailure(error))
    }
}

export const fetchBusinessNews = () => async(dispatch) => {
    dispatch(fetchRequest())
    try {
        const client = new Client(BASE_URL)
        
        const res = await client.get(BASE_URL_BUSINESS)
        dispatch(getBusinessNews(res.articles))
    } catch (error) {
        dispatch(fetchFailure(error))
    }
}

export const fetchTechNews = () => async(dispatch) => {
    dispatch(fetchRequest())
    try {
        const client = new Client(BASE_URL)
        
        const res = await client.get(BASE_URL_TECH)
        dispatch(getTechNews(res.articles))
    } catch (error) {
        dispatch(fetchFailure(error))
    }
}

export const fetchSportNews = () => async(dispatch) => {
    dispatch(fetchRequest())
    try {
        const client = new Client(BASE_URL)

        const res = await client.get(BASE_URL_SPORTS)
        dispatch(getSportNews(res.articles))
    } catch (error) {
        dispatch(fetchFailure(error))
    }
}

export const fetchScienceNews = () => async(dispatch) => {
    dispatch(fetchRequest())
    try {
        const client = new Client(BASE_URL)
        
        const res = await client.get(BASE_URL_SCIENCE)
        dispatch(getScienceNews(res.articles))
    } catch (error) {
        dispatch(fetchFailure(error))
    }
}