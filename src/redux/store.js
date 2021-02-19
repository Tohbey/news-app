import thunk from 'redux-thunk'
import { createStore, applyMiddleware, combineReducers} from 'redux'
import {News} from './reducers/news'

const rootReducer = combineReducers({
    news: News
})

const configureStore = () => createStore(rootReducer, applyMiddleware(thunk))

export default configureStore;