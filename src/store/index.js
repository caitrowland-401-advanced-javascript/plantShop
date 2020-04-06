import { createStore, combineReducers, applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import categoryReducer from '../Reducers/categoryReducer'
import productReducer from '../Reducers/productReducer'
import shoppingCart from '../Reducers/cartReducer'
import activeCategoryReducer from '../Reducers/activeCategoryReducer'

const reducers = combineReducers({
    categories: categoryReducer, 
    products: productReducer,
    shoppingCart: shoppingCart,
    activeCategory: activeCategoryReducer
})

const store = () => {
    return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))
}

export default store()