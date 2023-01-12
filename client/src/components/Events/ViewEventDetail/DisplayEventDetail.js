import { useState, useContext } from "react";
import { UserContext } from "../../../context/user";
import { useParams, Link } from "react-router-dom";

import DisplayEventInfoDetail from "./DisplayEventInfoDetail";

const DisplayEventDetail = () => {
    document.title = "Event Detail"
    
    const { id } = useParams()
    const { user, userSignedIn, userNotSignedIn, events, setFlag } = useContext(UserContext)
    const [ error, setError ] = useState("")

    const event = events.find(event => event.id === parseInt(id))

    const handleAttend = (coordinatorId, eventCoordinatorId) => {
        if (coordinatorId === eventCoordinatorId) 
            setError("You are hosting this event!")
        
        else 
            fetch(`/events/${event.id}/event_attendees`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    attendee_id: user.attendee_id, 
                    event_id: event.id
                })
            })
            .then(r => r.json())
            .then(data => {
                if (!data.error) {
                    setFlag(true)
                }
                
                else 
                    setError(data.error)
            })
    }

    if (userSignedIn) {
        if (event) {
            return (
                <div className="individual_event_detail_container">
                    <h1>Event Detail</h1>
                    <DisplayEventInfoDetail event={event}/>
                    
                    <div className="btn_container">
                        <button onClick={() => handleAttend(user.coordinator_id, event.coordinator_id)}>Attend</button>
                        <Link to="/events">Go Back</Link>
                    </div>

                    <p>{error}</p>
                </div>
            )
        }

        else 
            return <p>Loading...</p>
    }

    else 
        return userNotSignedIn()
}

export default DisplayEventDetail;