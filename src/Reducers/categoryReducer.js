const initialState = {
    categories: [
        {name: 'indoor', displayName:'Indoor', description: 'Indoor plants'},
        {name: 'outdoor', displayName:'Outdoor', description: 'Outdoor plants'},
        {name: 'artificial', displayName:'Artificial', description: 'Fake plants'},
        {name: 'special', displayName:'Special', description: 'Special plants'},
    ], 
    activeCategory: ''
}

const categoryReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SETACTIVE':
            return {...state, activeCategory : action.payload}
        default:
            return state
    }
}

export default categoryReducer