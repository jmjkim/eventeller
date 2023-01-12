const DisplayAttendees = ({event}) => {
    return (
        event.attendees?.length >= 1 ?
            <div className="list_of_attendee_container">
                <p>&#8595;</p>
                {event.attendees.map(attendee => {
                    return <p key={attendee.id}>{attendee.username}</p>
                })}
            </div> : <p>No Attendees Yet</p>
    )
}

export default DisplayAttendees;