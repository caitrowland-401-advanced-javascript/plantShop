const initialState = ''

const activeCategory = (category = initialState, action) => {
    switch(action.type) {
        case 'SET_ACTIVE':
            return {...category, activeCategory : action.payload}

        default:
            return category
    }
}

export default activeCategory