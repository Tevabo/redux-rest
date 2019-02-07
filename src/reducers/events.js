import {EVENTS_FETCHED} from '../actions/events'

const initialState = null

const eventsReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case EVENTS_FETCHED: 
            return state = action.events

        default:
            return state
    }
}


export default eventsReducer