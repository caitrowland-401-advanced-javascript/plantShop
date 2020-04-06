const initialState = {
    categories: [],
    activeCategory: ''
}

const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ALL_CATEGORIES':
            return {...state, categories: action.payload}
        // case 'SETACTIVE':
        //     return {...state, activeCategory : action.payload}
        default:
            return state
    }
}

export default categoryReducer