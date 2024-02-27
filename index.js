// 1. state
// 2. action
// 3. reducer
// 4. store

const { createStore } = require("redux")


const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
const RESET = 'RESET'
const INCREMENT_BY_VALUE = 'INCREMENT_BY_VALUE'

//state
const initialState ={
    count: 0
}


//action
const incrementCounter  = () =>{
    return {
        type:INCREMENT,
    }
}

const decrementCounter = () =>{
    return{
        type: DECREMENT,
    }
}

const resetCounter = () =>{
    return{
        type: RESET,
    }
}

const incrementByValue = (value) =>{
    return{
        type: INCREMENT_BY_VALUE,
        payload: value
    }
}


// reducer
const counterReducer = (state=initialState, action) =>{
    switch(action.type){
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            }
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            }
        case RESET:
            return {
                ...state,
                count: 0
            }
        case INCREMENT_BY_VALUE:
            return {
                ...state,
                count: state.count + action.payload
            }
        default:
            state
    }
}


// store
const store = createStore(counterReducer)

store.subscribe(()=>{
    console.log(store.getState())
})


store.dispatch(incrementCounter())
store.dispatch(decrementCounter())
store.dispatch(resetCounter())
store.dispatch(incrementByValue(10))