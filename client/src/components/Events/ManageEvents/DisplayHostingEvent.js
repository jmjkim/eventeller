import DisplayEventInfoDetail from "../ViewEventDetail/DisplayEventInfoDetail"
import DisplayFeedback from "./DisplayFeedback"
import { Link } from "react-router-dom"

const DisplayHostingEvent = ({events, user, setFlag}) => {
    const hostingEvent = events.find(event => event.coordinator_id === user.coordinator_id)

    const handleCancelHosting = (eventId) => {
        fetch(`${eventId}`, { method: "DELETE" })
        .then(() => setFlag(true))
    }

    if (hostingEvent)
        return (
            <div className="display_event_container">
                <h3>Your hosting event:</h3>
                <DisplayEventInfoDetail event={hostingEvent}/>
                
                <b>Feedbacks:</b>
                <DisplayFeedback feedbacks={hostingEvent.feedbacks}/>

                <div className="btn_container">
                    <button onClick={() => handleCancelHosting(hostingEvent.id)}>Mark As Completed</button>
                    <button onClick={() => handleCancelHosting(hostingEvent.id)}>Cancel Hosting</button>
                    <Link to={`/events/${hostingEvent.id}/edit`}>Edit</Link>
                </div>
            </div>
        )

    return (
        <div className="display_event_container">
            <p>You are not hosting any events</p>
        </div>
    )
}

export default DisplayHostingEvent;