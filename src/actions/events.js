import request from 'superagent'

export const EVENTS_FETCHED = 'EVENTS_FETCHED'
export const SINGLE_EVENT_FETCHED = 'SINGLE_EVENT_FETCHED'

const baseUrl = 'http://localhost:4000'

const eventsFetched = events => ({
    type: EVENTS_FETCHED,
    events
})

export const loadEvents = () => (dispatch, getState) => {
    if (getState().events) return

    request(`${baseUrl}/events`)
        .then(response => {
            dispatch(eventsFetched(response.body))

        })
        .catch(console.error)
}

export const EVENT_CREATE_SUCCESS = 'EVENT_CREATE_SUCCESS'

const eventCreateSuccess = event => ({
  type: EVENT_CREATE_SUCCESS,
  event
})

export const createEvent = (data) => dispatch => {
  request
    .post(`${baseUrl}/events`)
    .send(data)
    .then(response => {
      dispatch(eventCreateSuccess(response.body))
    })
    .catch(console.error)
}

const singleEventFetched = event => ({
  type: SINGLE_EVENT_FETCHED,
  event
})

export const loadSingleEvent = (id) => dispatch => {
  request
    .get(`${baseUrl}/events/${id}`)
    .then(response => {
      dispatch (singleEventFetched(response.body))
    })
    .catch(console.error)
}