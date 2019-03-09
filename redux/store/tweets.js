import axios from 'axios'
import { serverUrl } from '../../secrets'

//ACTION TYPES
const GOT_DATA = 'GOT_DATA'

//INITIAL STATE
const defaultState = []

//ACTION CREATORS
export const gotData = tweets => ({type: GOT_DATA, tweets})

//THUNK CREATORS
export const grabTweets = (pageNo, pageSize) => {
    return async (dispatch) => {
        if (pageNo && pageSize) {
            try {
                const response = await axios.get(`${serverUrl}/api/tweets/?pageNo=${pageNo}&pageSize=${pageSize}`)
                const action = gotData(response.data)
                // console.log('response.data', response.data)
                console.log('length of data: ', response.data.length)
                dispatch(action)
            } catch (err) {
                console.error(err)
            }
        } else {
            try {
                const response = await axios.get(`${serverUrl}/api/tweets`)
                const action = gotData(response.data)
                // console.log('response.data', response.data)
                console.log('length of data: ', response.data.length)
                dispatch(action)
            } catch (err) {
                console.error(err)
            }
        }
    }
}

//REDUCER
export default function (state = defaultState, action) {
    switch (action.type) {
        case GOT_DATA:
            console.log("state", [...state, ...action.tweets])
            return [...state, ...action.tweets]
        default:
            return state
    }
}