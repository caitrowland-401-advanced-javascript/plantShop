

const initialState = {
    products: [
        {category:'indoor', name: 'Fiddle Leaf Fig',  description:'Large, needs bright indirect sunlight', price:120, inventory: 20},
        {category:'indoor', name: 'Bannana Leaf Tree',  description:'Large, banana like leaves', price:70, inventory: 17},
        {category:'indoor', name: 'Areca Palm Tree',  description:'2-3ft tall, thrives in low light conditons', price:65, inventory: 25},
        {category: 'outdoor', name: 'Geranium', description: 'Care includes deadhead and pinch back as needed', price: 30, inventroy: 35},
        {category: 'outdoor', name: 'Lilies', description: 'Blooms all summer and fall', price: 20, inventroy: 37},
        {category: 'artificial', name:'Palm Leaf', description:'Single leaf sits on sturdy steam. 44"', price:16, inventory:50 }, 
        {category: 'artificial', name:'Iggy Bamboo Tree in Pot', description:'ZSlight color variations that lend the plant a realistic looks. Tree makes up base of plant', price:70, inventory:32 },  
        {category: 'artificial', name:'Potted Snake Plant', description:'Sculptural aragement in stone pt', price:55, inventory:27 },  
        {category: 'special', name:'Flower', description: 'rotates daily.', price:20, inventory: 420},
        {category: 'special', name:'Edible', description: 'rotates daily.', price:30, inventory: 420}
    ]
}

const productToShow = (state=initialState, action) => {
    let products;
    switch(action.type) {
        case 'SHOW' : 
        products = state.products.map(product => 
            product.category
            ? {...product}
            : product
        )
        // console.log(products)
        return {products}
        default:
            return state
    }
}

export default productToShow

//action creators 

export function filterProducts(name) {
    return{
        type: 'Filter', 
        payload: name
    } 

}