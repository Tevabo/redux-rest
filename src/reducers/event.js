import { SINGLE_EVENT_FETCHED } from '../actions/events'

const initialState = null

const eventsReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case SINGLE_EVENT_FETCHED:
            return state = action.event

        default:
            return state
    }
}


export default eventsReducer