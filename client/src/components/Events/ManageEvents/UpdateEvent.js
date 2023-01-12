import { useState, useContext } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { UserContext } from "../../../context/user"

import UpdateEventForm from "../Form/UpdateEventForm"

const UpdateEvent = () => {
   document.title = "Edit"
   
    const { id } = useParams() 
    const { events, setFlag } = useContext(UserContext)
    const [ inputs, setInputs ] = useState({})
    const [ errors, setErrors ] = useState([])
    const navigate = useNavigate()

    const updatingEvent = events.find(event => event.id === parseInt(id))

    const handleUpdate = (e) => {
       e.preventDefault()   

       fetch(`/events/${id}`, {
           method: "PATCH",
           headers: { "Content-Type": "application/json" },
           body: JSON.stringify({
              name: inputs.name,
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
              setFlag(true)
              alert("Event successfully updated!")
              navigate("/events/manage")
           } 
           else 
               setErrors(data.error)})
   }

   const handleChange = (e) => {
      const name = e.target.name
      const value = e.target.value
      setInputs(values => ({...values, [name]: value}))
   }

   return <UpdateEventForm updatingEvent={updatingEvent} handleUpdate={handleUpdate} handleChange={handleChange} errors={errors}/>
}

export default UpdateEvent;