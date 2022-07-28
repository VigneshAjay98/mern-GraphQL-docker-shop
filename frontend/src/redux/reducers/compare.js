const initialState = {
    name: 'toy',
    description: 'beautiful toy',
    price: 300
}

const compareReducer = (state = initialState, action) => {
    switch(action.type) {
        case true:
            return {
                ...state,
            }
        case false:
            return {
                ...state,
            }
        default: return state
    }
}

export default compareReducer