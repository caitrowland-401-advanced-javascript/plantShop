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

export function decrement() {
    return {
        type: 'DECREMENT'
    }
}