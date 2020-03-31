import { createStore, combineReducers} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import activeCategory from './activeCategory'
import productToShow from './products'

const reducers = combineReducers({activeCategory, productToShow })

const store = () => {
    return createStore(reducers, composeWithDevTools() )
}

export default store()