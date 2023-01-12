import DisplayAttendees from "./DisplayAttendees"

const DisplayEventInfoDetail = ({event}) => {
    if (event) 
        return (
            <div className="event_info_detail_container">
                <ul>
                    <li><b>Event Name</b>: {event.name}</li>
                    <li><b>Hosted by</b>: {event.coordinator.first_name} {event.coordinator.last_name}</li>
                    <li><b>Date:</b> {event.start_date} - {event.end_date}</li>
                    <li><b>Time:</b> {event.start_time} - {event.end_time}</li>
                    <li><b>Location:</b> {event.street} {event.city} {event.state} {event.zipcode}</li>
                    <li><b>Description:</b> {event.description}</li>
                    <li><b>Total Attendees</b>: {event.attendees.length}</li>
                </ul>
                
                <b>List of Attendees:</b>
                {<DisplayAttendees event={event}/>}
            </div>
        )

    else 
        return null
}

export default DisplayEventInfoDetail;