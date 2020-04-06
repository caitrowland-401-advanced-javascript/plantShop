const activeCategoryReducer = (state = '', action) => {
    switch (action.type) {
        case 'SETACTIVE':
            return action.payload
        case 'CLEARACTIVE':
            return ''
        default:
            return state
    }
}

export default activeCategoryReducer