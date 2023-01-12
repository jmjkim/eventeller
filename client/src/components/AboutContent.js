const AboutContent = () => {
    return (
        <>
            <div className="about_the_app_container">
                <h3>About the app</h3>
                <p><b>Eventeller (Event Teller)</b> is my software engineering final project at Flatiron School where users can either create their own event such as birthday, pet meeting and other casual meetings or attend to as many events as they want.</p>

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

            <div className="technical_detail_container">
                <h3>Technical Detail</h3>

                <ul>
                    <li>Models have <b>Many to Many</b> associations.</li>
                    <li>Multiple <b>Validations</b> are implemented on each model for proper data handling in the database (ex: <b>uniqueness</b> for username, phone number, email address).</li>
                    <li>Password protection <b>(has_secure_password)</b> and <b>User Authentication</b> implemented for user account.</li>
                    <li>Implemented <b>UseContext</b> for global state variable.</li>
                    <li>React/Rails used for Front/Backend.</li>
                </ul>
            </div>
        </>
    )
}

export default AboutContent;