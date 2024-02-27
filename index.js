// 1. state
// 2. action
// 3. reducer
// 4. store

const { createStore } = require("redux")


const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
const RESET = 'RESET'

//state
const initialState ={
    count: 1
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
                count: state.count - 1
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