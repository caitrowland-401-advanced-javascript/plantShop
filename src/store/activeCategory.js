const initialState = {
    categories: [
        {name: 'indoor', displayName:'Indoor', description: 'Indoor plants', active: false},
        {name: 'outdoor', displayName:'Outdoor', description: 'Outdoor plants', active: false},
        {name: 'artificial', displayName:'Artificial', description: 'Fake plants', active: false},
        {name: 'special', displayName:'Special', description: 'Special plants', active: false},
    ], 
    currentCategory: ''
}

const activeCategory = (state = initialState, action) => {
    let categories, currentCategory
    switch(action.type) {
        case 'SETACTIVE':
            currentCategory = state.currentCategory
            //reset any category with active = true, back to false
            categories = state.categories.map(category =>
                category.active === true 
                ? {...category, active: category.active= false}
                : category)
            //set new current category 
            categories = state.categories.map(category => 
                category.name === action.payload
                ? (currentCategory= category.name, {...category, active: category.active=true})
                : category
            )
            return {categories, currentCategory}
        case 'RESET':
            return initialState
        default:
            return state
    }
}

export default activeCategory

//action creaters
export function setActive(name) {
    return {
        type: 'SETACTIVE',
        payload: name
    }
}

export function reset() {
    return {
        type: 'RESET'
    }
}