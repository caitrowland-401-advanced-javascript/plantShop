const initialState = {
    products: [],
    totalItems: 0
}

const shoppingCart = (state = initialState, action) => {
    let totalItems, products
    switch (action.type) {
        case 'INCREMENT':
            products = [...state.products, action.payload]
            totalItems = state.totalItems + 1
            return {totalItems, products}
        default:
            return state
    }
}

export default shoppingCart

export function addToCart(product) {
    return {
        type: 'INCREMENT',
        payload: product
    }
}