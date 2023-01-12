import { Link } from "react-router-dom"
import DisplayErrors from "../../DisplayErrors"

const UpdateEventForm = ({updatingEvent, handleUpdate, handleChange, errors}) => {
    return (
       <div className="update_event_form_container">
            <h1>Update Event</h1>

            <form id="update_event_form" onSubmit={handleUpdate}>
                <label>Event Name</label>
                <input type="text"
                       name="name"
                       defaultValue={updatingEvent?.name}
                       required={true}
                       onChange={handleChange}/>

                <label>Start Date</label>
                <input type="date"
                       name="start_date"
                       defaultValue={updatingEvent?.start_date}
                       required={true}
                       onChange={handleChange}/>

                <label>End Date</label>
                <input type="date"
                       name="end_date"
                       defaultValue={updatingEvent?.end_date}
                       required={true}
                       onChange={handleChange}/>

                <label>From</label>
                <input type="time"
                       name="start_time"
                       defaultValue={updatingEvent?.start_time}
                       required={true}
                       onChange={handleChange}/>

                <label>To</label>
                <input type="time"
                       name="end_time"
                       defaultValue={updatingEvent?.end_time}
                       required={true}
                       onChange={handleChange}/>

                <label>Street</label>
                <input type="text"
                       name="street"
                       defaultValue={updatingEvent?.street}
                       required={true}
                       maxLength={20}
                       onChange={handleChange}/>

                <label>City</label>
                <input type="text"
                       name="city"
                       defaultValue={updatingEvent?.city}
                       required={true}
                       maxLength={20}
                       onChange={handleChange}/>

                <label>State</label>
                <input type="text"
                       name="state"
                       defaultValue={updatingEvent?.state}
                       required={true}
                       maxLength={2}
                       onChange={handleChange}/>    

                <label>Zipcode</label>
                <input type="text"
                       name="zipcode"
                       defaultValue={updatingEvent?.zipcode}
                       required={true}
                       maxLength={5}
                       onChange={handleChange}/>

                <label>Description</label>
                <input type="text"
                       name="description"
                       defaultValue={updatingEvent?.description}
                       required={true}
                       maxLength={400}
                       onChange={handleChange}
                       size="400"/>

                <div className="btn_container">
                    <button type="submit">Update</button>
                    <Link to="/events/manage">Back To Manage Event</Link>
                </div>
            </form>

            <DisplayErrors errors={errors}/>
       </div>
    )
}

export default UpdateEventForm;