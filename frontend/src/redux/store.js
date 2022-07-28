import { configureStore } from '@reduxjs/toolkit'
// import { combineReducers, createStore } from 'redux'
import quantityReducer from './reducers/cartQty.js'
import compareReducer from './reducers/compare.js'

// const rootReducer = combineReducers({
//     quantity: quantityReducer,
//     compare: compareReducer
// })

// const store = createStore(rootReducer)

const store = configureStore({
    reducer: {
        quantity: quantityReducer,
        compare: compareReducer
    }
})

export default store