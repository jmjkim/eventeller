import { useContext } from "react";
import { UserContext } from "../../../context/user";
import { Link } from "react-router-dom";

import DisplayHostingEvent from "./DisplayHostingEvent"
import DisplayAttendingEvents from "./DisplayAttendingEvents";

const ManageEvent = () => {
    document.title = "Event Management"
    const { user, userSignedIn, userNotSignedIn, events, setFlag } = useContext(UserContext)

    if (userSignedIn) 
        return (
            <div className="manage_event_container">
                <h1>Manage My Events</h1>

                <div className="display_hosting_event_container">
                    <DisplayHostingEvent user={user} events={events} setFlag={setFlag}/>
                </div>

                <div className="display_attending_event_container">
                    <h3>Your Attending Events:</h3>
                    <DisplayAttendingEvents/>
                </div>

                <div className="btn_container">
                    <Link to="/">Back to Main</Link>
                </div>
            </div>
        )

    return userNotSignedIn()
}

export default ManageEvent;