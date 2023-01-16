import { useState } from "react"
import { useContext } from "react"
import { UserContext } from "../../../context/user"

import DisplayEventInfoDetail from "../ViewEventDetail/DisplayEventInfoDetail"
import CreateFeedbackForm from "../Form/CreateFeedbackForm"

const DisplayAttendingEvents = () => {
    const { user, setFlag } = useContext(UserContext)
    const [ showFeedbackFormFor, setShowFeedbackFormFor ] = useState()

    const handleCancelAttending = (attendeeId) => {
        fetch(`/event_attendees/${attendeeId}`, { method: "DELETE" })
        .then(() => setFlag(true))
    }

    if (user.events?.length >= 1) {
        return user.events.map(event => {
            return (
                <div key={event.id} className="display_event_container">
                    <DisplayEventInfoDetail event={event}/>

                    <div className="btn_container">
                        <button id={event.id} onClick={(e) => setShowFeedbackFormFor(e.target.id)}>Leave A Feedback</button>
                        <button onClick={() => handleCancelAttending(user.attendee_id)}>Cancel Attending</button>
                    </div>
                    
                    {parseInt(showFeedbackFormFor) === event.id ? <CreateFeedbackForm attendeeId={user.attendee_id} eventId={event.id} setShowFeedbackFormFor={setShowFeedbackFormFor} setFlag={setFlag}/> : null}
                </div>
                
            )
        })
    } 
    else {
        return (
            <div className="display_event_container">
                <p>You are not attending any events.</p>
            </div>
        )
    }
}

export default DisplayAttendingEvents;