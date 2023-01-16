import { useState } from "react"
import DisplayErrors from "../../DisplayErrors"

const CreateFeedbackForm = ({attendeeId, eventId, setShowFeedbackFormFor, setFlag}) => {
    const [ inputs, setInputs ] = useState({})
    const [ errors, setErrors ] = useState()

    const handleChange = (e) => {
       const name = e.target.name
       const value = e.target.value
       setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault()   
 
        fetch(`${eventId}/feedbacks`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                attendee_id: attendeeId,
                event_id: eventId,
                feedback_input: inputs.feedback_input
            })
        })
        .then(r => r.json())
        .then(data => {
            if (!data.error) {
                alert("Thank you for your feedback!")
                setFlag(true)
                setInputs("")
                setShowFeedbackFormFor()
            } 

            else 
                setErrors(data.error)
            }
        )
    }

    return (
        <div className="feedback_form_container">
            <form onSubmit={handleSubmit}>
                <textarea type="text"
                          name="feedback_input"
                          value={inputs.feedback_input || ""}
                          onChange={handleChange}
                          cols={50}
                          rows={5}
                          maxLength={200} 
                          required={true}
                          placeholder="max length 200"/>

                <div className="btn_container">
                    <button type="submit">Submit</button>
                    <button onClick={() => setShowFeedbackFormFor()}>Cancel</button>
                </div>
            </form>
            
            <DisplayErrors errors={errors}/>
        </div>
    )
}

export default CreateFeedbackForm;