import{
    FETCH_REQUEST, 
    GET_BUSINESS,
    GET_SCIENCE, 
    GET_TECH, 
    GET_HEADLLINES, 
    GET_SPORTS, 
    FETCH_FAILURE
} from '../actionTypes/news'

const intialState = {
    generalNews: [],
    sportNews: [],
    businessNews: [],
    techNews: [],
    scienceNews: [],
    loading: false,
    error: ""
}

export const News = (state = intialState, action) => {
    switch(action.type){
        case FETCH_REQUEST:
            return{
                ...state,
                loading: true
            }
        case GET_HEADLLINES:
            return{
                ...state,
                loading: false,
                generalNews: action.payload
            }   
        case GET_BUSINESS:
            return{
                ...state,
                loading: false,
                businessNews: action.payload
            }
        case GET_SCIENCE:
            return{
                ...state,
                loading: false,
                scienceNews: action.payload
            }
        case GET_SPORTS:
            return{
                ...state,
                loading: false,
                sportNews: action.payload
            }
        case GET_TECH:
            return{
                ...state,
                loading: false,
                techNews: action.payload
            }
        case FETCH_FAILURE:
            return{
                ...state,
                loading: false,
                error: action.payload  
            }
        default: return state
    }
}