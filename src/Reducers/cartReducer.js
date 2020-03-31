const initialState = {
    products: [],
    totalItems: 0
}

const shoppingCart = (state = initialState, action) => {
    let totalItems, products
    switch (action.type) {
        // case 'DECREMENT':
        case 'ADD_TO_CART':
            products = [...state.products, action.payload]
            totalItems = state.totalItems + 1
            return {totalItems, products}
        default:
            return state
    }
}

export default shoppingCart