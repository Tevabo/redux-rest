import React, { Component } from 'react';
import store from './store'
import {Provider} from 'react-redux'
import { Route } from 'react-router-dom'
import EventsListContainer from './components/EventsListContainer'
import CreateEventListFormContainer from './components/CreateEventFormContainer'
import EventDetailsContainer from './components/EventDetailsContainer'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Route path="/" exact component={EventsListContainer} />
          <CreateEventListFormContainer />
          <Route path="/events/:id" component={EventDetailsContainer} />

        </div>
      </Provider>
    );
  }
}

export default App;
