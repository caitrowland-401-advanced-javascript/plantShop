///Get products from remote API 
export function getAllProducts() {
    return async function (dispatch) {
        const raw = await fetch('http://localhost:3001/products')
        const data = await raw.json()

        return dispatch(getAllProductsAction(data))
    }
}

function getAllProductsAction(data) {
    return {
        type: 'GET_ALL_PRODUCTS',
        payload: data
    }
}

export function getAllCategories() {
    return async function (dispatch) {
        const raw = await fetch('http://localhost:3001/categories')
        const data = await raw.json()

        return dispatch(getAllCategoriesAction(data))
    }
}

function getAllCategoriesAction(data) {
    return {
        type: 'GET_ALL_CATEGORIES',
        payload: data
    }
}

export const setActive = name => ({
    type: 'SETACTIVE',
    payload: name
})

export function addToCart(product) {
    return {
        type: 'ADD_TO_CART',
        payload: product.product
    }
}

export function removeFromCart(product) {
    return {
        type: 'REMOVE_FROM_CART',
        payload: product.product
    }
}

// export function decrement() {
//     return {
//         type: 'DECREMENT'
//     }
// }

