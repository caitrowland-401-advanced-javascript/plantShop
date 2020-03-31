import { createStore, combineReducers} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import categoryReducer from '../Reducers/categoryReducer'
import productReducer from '../Reducers/productReducer'
import { act } from 'react-dom/test-utils'
import activeCategory from '../Reducers/activeCategory'

const reducers = combineReducers({
   categories: categoryReducer, 
    products: productReducer,
    activeCategory: activeCategory
})

const store = () => {
    return createStore(reducers, composeWithDevTools() )
}

export default store()