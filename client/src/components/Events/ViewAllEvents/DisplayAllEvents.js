import { useContext, useState } from "react";
import { UserContext } from "../../../context/user";
import { Link } from "react-router-dom";

import SearchBar from "./SearchBar";

const DisplayAllEvents = () => {
    document.title = "Events"

    const { userSignedIn, userNotSignedIn, events } = useContext(UserContext)
    const [ searchedInput, setSearchedInput ] = useState("")

    const searchedEvent = [...events].filter(event => event.coordinator.last_name.includes(searchedInput))

    const eventDisplayer = (events) => {
        return events.map(event => {
            return (
                <div key={event.id} className="individual_event_container">
                    <ul>
                        <li><b>Event Name</b>: {event.name}</li>
                        <li><b>Hosted by</b>: {event.coordinator.first_name} {event.coordinator.last_name}</li>
                        <li><b>Date:</b> {event.start_date} - {event.end_date}</li>
                        <li><b>Time:</b> {event.start_time} - {event.end_time}</li>
                        <li><b>Location:</b> {event.street} {event.city} {event.state} {event.zipcode}</li>
                    </ul>

                    <Link to={`/events/${event.id}`}>View Detail</Link>
                </div>
            )}
        )
    }

    if (userSignedIn) 
        return (
            <div className="display_event_container">
                <h1>All Events</h1>
                <SearchBar setSearchedInput={setSearchedInput}/>

                <div className="display_event_subcontainer">
                    {searchedEvent?.length >= 1 ? eventDisplayer(searchedEvent) : events?.length >= 1 ? eventDisplayer(events) : <h2>No events</h2>}
                </div>
            </div>
        )

    else 
        return userNotSignedIn()
}

export default DisplayAllEvents;
