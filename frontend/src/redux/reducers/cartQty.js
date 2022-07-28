const initialState = {
    qty: 1
}

const quantityReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return {
                ...state,
                qty: state.qty + 1
            }
        case 'DECREMENT':
            return {
                ...state,
                qty: state.qty - 1
            }
        default: return state
    }
}

export default quantityReducer