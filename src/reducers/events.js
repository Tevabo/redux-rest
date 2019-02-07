import {EVENTS_FETCHED, EVENT_CREATE_SUCCESS} from '../actions/events'

const initialState = null

const eventsReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case EVENTS_FETCHED: 
            return state = action.events

        case EVENT_CREATE_SUCCESS:
            return [...state, action.event]

        default:
            return state
    }
}


export default eventsReducer