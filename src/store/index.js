import { createStore, combineReducers} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import categoryReducer from '../Reducers/categoryReducer'
import productReducer from '../Reducers/productReducer'
import shoppingCart from '../Reducers/cartReducer'

const reducers = combineReducers({
    categories: categoryReducer, 
    products: productReducer,
    shoppingCart: shoppingCart
})

const store = () => {
    return createStore(reducers, composeWithDevTools() )
}

export default store()