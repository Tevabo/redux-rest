import React from 'react'
import {connect} from 'react-redux'
import EventDetails from './EventDetails'
// import {loadSingleEvent, updateEvent, deleteEvent} from '../actions/events'
import {loadSingleEvent} from '../actions/events'



class EventDetailsContainer extends React.Component {
  componentDidMount() {
    this.props.loadSingleEvent(Number(this.props.match.params.id))
  }

  render() {
    // console.log(this.props.event)
    return <EventDetails event={this.props.event} />
  }
}

const mapStateToProps = state => {
  // console.log(state)
  return {
    event: state.event
  }
}

export default connect(mapStateToProps, {loadSingleEvent})(EventDetailsContainer)