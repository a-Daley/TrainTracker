import axios from 'axios'

//ACTION TYPES
const GOT_TRAIN_DATA = 'GOT_TRAIN_DATA'

//INITIAL STATE
const defaultState = []

//ACTION CREATORS
const gotTrainData = (tweets) => {
    type: GOT_TRAIN_DATA,
    tweets
}

//THUNK CREATORS
export const grabOneTrainTweets = (train) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${serverUrl}/api/tweets/?q="${train}+trains`)
            const action = gotTrainData(response.data)
            dispatch(action)
        } catch (err) {
            console.error(err)
        }
    }
}

//REDUCER
export default function (state = defaultState, action) {
    switch (action.type) {
        case GOT_TRAIN_DATA:
            return [...action.tweets]
        default:
            return state
    }
}