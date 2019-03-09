import axios from 'axios'
import { serverUrl } from '../../secrets'

//ACTION TYPES
const GOT_DATA = 'GOT_DATA'

//INITIAL STATE
const defaultState = []

//ACTION CREATORS
export const gotData = tweets => ({type: GOT_DATA, tweets})

//THUNK CREATORS
export const grabTweets = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${serverUrl}/api/tweets/all`)
            const action = gotData(response.data)
            dispatch(action)
        } catch (err) {
            console.error(err)
        }
    }
}

//REDUCER
export default function (state = defaultState, action) {
    switch (action.type) {
        case GOT_DATA:
            return [...state, ...action.tweets]
        default:
            return state
    }
}