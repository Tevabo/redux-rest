import * as React from 'react'
import { Link } from 'react-router-dom'

class EventsList extends React.Component {

    renderEvents(event){
        return <li key={event.id}>
            <Link to={`events/${event.id}`}>{event.name}</Link>
            </li>
    }
    render() {
        const events = this.props.events
        return (
            <div>
                {!events && 'Loading...'}
                {events &&
                    <ul>
                        {events.map(this.renderEvents)}
                    </ul>}
            </div>
        )
    }

}

export default EventsList