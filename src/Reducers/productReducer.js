const initialState = [
        {category:'indoor', name: 'Fiddle Leaf Fig',  description:'Large, needs bright indirect sunlight', price:120, inventory: 20},
        {category:'indoor', name: 'Bannana Leaf Tree',  description:'Large, banana like leaves', price:70, inventory: 17},
        {category:'indoor', name: 'Areca Palm Tree',  description:'2-3ft tall, thrives in low light conditons', price:65, inventory: 25},
        {category: 'outdoor', name: 'Geranium', description: 'Care includes deadhead and pinch back as needed', price: 30, inventory: 35},
        {category: 'outdoor', name: 'Lilies', description: 'Blooms all summer and fall', price: 20, inventory: 37},
        {category: 'artificial', name:'Palm Leaf', description:'Single leaf sits on sturdy steam. 44"', price:16, inventory:50 }, 
        {category: 'artificial', name:'Iggy Bamboo Tree in Pot', description:'Slight color variations that lend the plant a realistic looks. Tree makes up base of plant', price:70, inventory:32 },  
        {category: 'artificial', name:'Potted Snake Plant', description:'Sculptural aragement in stone pot', price:55, inventory:27 },  
        {category: 'special', name:'Flower', description: 'rotates daily.', price:20, inventory: 420},
        {category: 'special', name:'Edible', description: 'rotates daily.', price:30, inventory: 420}
    ]

const productReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'SETACTIVE': 
            if (action.payload === '') return initialState 
            const products = initialState.filter(product => product.category === action.payload)
            return products 
        // case 'DECREMENT':
        //     return initialState.products.map(product =>
        //         product.name === action.payload
        //             ? { ...product, inventory: product.inventory - 1 }
        //             : product
        //     )
        default:
            return state
    }
}

export default productReducer

//action creators 


export function decrement(product) {
    return {
        type: 'DECREMENT',
        payload: product
    };
}