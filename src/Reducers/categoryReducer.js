const initialState = {
    categories: [
        {name: 'indoor', displayName:'Indoor', description: 'Indoor plants', active: false},
        {name: 'outdoor', displayName:'Outdoor', description: 'Outdoor plants', active: false},
        {name: 'artificial', displayName:'Artificial', description: 'Fake plants', active: false},
        {name: 'special', displayName:'Special', description: 'Special plants', active: false},
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

//action creaters
// export function setActive(name) {
//     return {
//         type: 'SETACTIVE',
//         payload: name
//     }
// }

// export function reset() {
//     return {
//         type: 'RESET'
//     }
// }