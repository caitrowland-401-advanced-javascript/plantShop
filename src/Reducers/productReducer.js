const initialState = []

const productReducer = (allProducts = initialState, action) => {
    // let products
    switch (action.type) {
        case 'GET_ALL_PRODUCTS':
            return action.payload
        
        // case 'SETACTIVE':
        //     // console.log('initial state', initialState)
        //     if (action.payload === '') return allProducts
        //     console.log(action.payload)
        //     const products = allProducts.filter(product => product.category === action.payload)
        //     console.log(products)
        //     return products
        
        case 'ADD_TO_CART':
            return allProducts.map(product =>
                product.name === action.payload.name
                    ? { ...product, inventory: product.inventory - 1 }
                    : product
            )

        default:
            return allProducts
    }
}

export default productReducer