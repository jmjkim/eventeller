const AboutContent = () => {
    return (
        <>
            <div className="about_the_app_container">
                <h2>Eventeller (Event Teller)</h2>
                <p>is an application where users can either create their own event such as a birthday party, pet meeting, other casual meetings or attend to as many events as they want!</p>

                <div className="about_the_app_subcontainer">
                    <ol>
                        <p>As an <b>Event Host</b>, you can:</p>
                        <li>Host only one event at a time</li>
                        <li>Edit/Cancel hosting event</li>
                        <li>View event attendees and their feedbacks</li>
                    </ol>

                    <ol>
                        <p>As an <b>Event Attendee</b>, you can:</p>
                        <li>Attend as many events as you want</li>
                        <li>Cancel the attendance</li>
                        <li>Leave a feedback for attended event</li>
                        <li>View event attendees</li>
                    </ol>
                </div>
            </div>
        </>
    )
}

export default AboutContent;