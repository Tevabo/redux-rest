import * as React from 'react'

function EventForm(props) {
    return (
        <div>
            <form className="eventForm" onSubmit={props.onSubmit} onChange={props.onChange}>
                <label>
                    Name:
               <input type="text" name="name" onChange={props.onChange}/>
                </label> <br />

                <label>
                    Date:
                <input type="date" name="date" onChange={props.onChange}/>
                </label> <br />

                <label>
                    Description:
                <input type="text" name="description" onChange={props.onChange}/>
                </label> <br />

                <label>                    
                    <input type="submit" value="Submit" />
                </label>
            </form>
        </div>)

}

export default EventForm