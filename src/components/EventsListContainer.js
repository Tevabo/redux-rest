import React from 'react'
import { loadEvents } from '../actions/events'
import { connect } from 'react-redux'
import EventsList from './EventsList'
import CreateEventListFormContainer from './CreateEventFormContainer'


class EventsListContainer extends React.Component {
  componentDidMount() {
    this.props.loadEvents()
  }

  render() {
    return (
      <div>
        <EventsList events={this.props.events} />
        <CreateEventListFormContainer />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    events: state.events
  }
}

export default connect(mapStateToProps, { loadEvents })(EventsListContainer)
