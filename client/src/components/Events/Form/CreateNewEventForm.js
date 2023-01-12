import { useContext, useState } from "react";
import { UserContext } from "../../../context/user";
import { Link } from "react-router-dom";

import DisplayErrors from "../../DisplayErrors";

const CreateNewEventForm = () => {
       const { user, setEvents, setFlag } = useContext(UserContext)
       const [ inputs, setInputs ] = useState({})
       const [ errors, setErrors ] = useState([])

       const handleChange = (e) => {
          const name = e.target.name
          const value = e.target.value
          setInputs(values => ({...values, [name]: value}))
       }

       const handleSubmit = (e) => {
       e.preventDefault()   

       fetch("/events", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                     name: inputs.name,
                     coordinator_id: user.id,
                     start_date: inputs.start_date,
                     end_date: inputs.end_date,
                     start_time: inputs.start_time,
                     end_time: inputs.end_time,
                     street: inputs.street,
                     city: inputs.city,
                     state: inputs.state,
                     zipcode: inputs.zipcode,
                     description: inputs.description,
              })
       })
       .then(r => r.json())
       .then(data => {
              if (!data.error) {
                     setEvents(data)
                     setFlag(true)
                     alert("Event successfully created!")
                     setInputs("")
                     setErrors()
              } 
              
              else 
                     setErrors(data.error)})
       }

       return (
              <div className="create_event_form_container">
                     <h1>Create New Event</h1>
                     <p>*Reminder: You can host only one event at a time.</p>

                     <form id="create_event_form" onSubmit={handleSubmit}>
                         <label>Event Name</label>
                         <input type="text"
                                name="name"
                                value={inputs.name || ""}
                                required={true}
                                placeholder="max 50 lengths"
                                onChange={handleChange}/>

                         <label>Start Date</label>
                         <input type="date"
                                name="start_date"
                                value={inputs.start_date || ""}
                                required={true}
                                onChange={handleChange}/>

                         <label>End Date</label>
                         <input type="date"
                                name="end_date"
                                value={inputs.end_date || ""}
                                required={true}
                                onChange={handleChange}/>

                         <label>From</label>
                         <input type="time"
                                name="start_time"
                                value={inputs.start_time || ""}
                                required={true}
                                onChange={handleChange}/>

                         <label>To</label>
                         <input type="time"
                                name="end_time"
                                value={inputs.end_time || ""}
                                required={true}
                                onChange={handleChange}/>

                         <label>Street</label>
                         <input type="text"
                                name="street"
                                value={inputs.street || ""}
                                required={true}
                                maxLength={20}
                                onChange={handleChange}/>

                         <label>City</label>
                         <input type="text"
                                name="city"
                                value={inputs.city || ""}
                                required={true}
                                maxLength={20}
                                onChange={handleChange}/>

                         <label>State</label>
                         <input type="text"
                                name="state"
                                value={inputs.state || ""}
                                required={true}
                                maxLength={2}
                                onChange={handleChange}/>  

                         <label>Zipcode</label>
                         <input type="text"
                                name="zipcode"
                                value={inputs.zipcode || ""}
                                required={true}
                                maxLength={5}
                                onChange={handleChange}/>

                         <label>Description</label>
                         <textarea type="text"
                                name="description"
                                value={inputs.description || ""}
                                required={true}
                                maxLength={800}
                                rows="20"
                                cols="40"
                                placeholder="max 800 lengths"
                                onChange={handleChange}/>

                         <div className="btn_container">
                            <button type="submit">Create</button>
                            <Link to="/">Back To Main</Link>
                         </div>

                         <DisplayErrors errors={errors}/>
                     </form>
              </div>
       )
}

export default CreateNewEventForm;