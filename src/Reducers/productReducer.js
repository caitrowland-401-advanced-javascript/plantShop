const initialState = []

const productReducer = (allProducts = initialState, action) => {
    // let products
    switch (action.type) {
        case 'GET_ALL_PRODUCTS':
            return action.payload
        
        case 'ADD_TO_CART':
            return allProducts.map(product =>
                product.name === action.payload.name
                    ? { ...product, inventory: product.inventory - 1 }
                    : product
            )
        case 'REMOVE_FROM_CART':
            return allProducts.map(product => 
                product.name === action.payload.name
                ? { ...product, inventory: product.inventory + 1 }
                    : product
            )
        default:
            return allProducts
    }
}

export default productReducer