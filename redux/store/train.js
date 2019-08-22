import axios from 'axios'
import { serverUrl } from '../../secrets'

//ACTION TYPES
const GOT_TRAIN_DATA = 'GOT_TRAIN_DATA'
const TRAIN_SELECTED = 'TRAIN_SELECTED'

//INITIAL STATE
const defaultState = {
    data: [],
    selectedTrain: {}
}
//ACTION CREATORS
export const gotTrainData = (tweets) => ({ type: GOT_TRAIN_DATA, tweets})

export const selectTrain = (train) => ({
    type: TRAIN_SELECTED,
    train})

//THUNK CREATORS
export const grabTrainTweets = (train) => {
    return async (dispatch) => {  
        try {
            const response = await axios(`${serverUrl}/api/tweets/?q="+${train}+trains`)
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
        case TRAIN_SELECTED: 
            return {...state, selectedTrain: action.train}
        case GOT_TRAIN_DATA:
            return {...state, data: [...action.tweets]}
        default:
            return state
    }
}