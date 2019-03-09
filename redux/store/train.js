import axios from 'axios'

//ACTION TYPES
const GOT_DATA = 'GOT_DATA'

//INITIAL STATE
const defaultState = ['test']

//ACTION CREATORS


//THUNK CREATORS

//REDUCER
export default function (state = defaultState, action) {
    switch (action.type) {
        case GOT_DATA:
            return [...state, ...action.tweets]
        default:
            return state
    }
}