import * as React from 'react'

function EventDetails(event) {
    const singleEvent = event.event
    return (
        <div>

            {!singleEvent && 'Loading...'}

            {singleEvent && <div>
                <h1>{singleEvent.name}</h1>
                <i>{singleEvent.date}</i>
                <p>{singleEvent.description}</p></div>}

        </div>
    )
}

export default EventDetails