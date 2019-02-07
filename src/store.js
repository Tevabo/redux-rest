import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducers'
import ReduxThunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSIONS_COMPOSE__ || compose

const enhancer = composeEnhancers(
    applyMiddleware(ReduxThunk)
)

const store = createStore(reducer, enhancer)

export default store