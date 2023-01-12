import SignIn from "../UserSession/SignIn"

const BeforeSignedIn = () => {
    return (
        <div className="signin_container">
            <h1>Welcome To Eventeller</h1>
            <img id="signin_img" src="https://media.istockphoto.com/id/1366026792/photo/calendar-page-with-red-pen-close-up-focus-on-number-15-in-calendar-and-empty-red-circle-for.jpg?b=1&s=170667a&w=0&k=20&c=JuGs0441exGlcAvhHOO26AQhKgtmV-8QN3HVYzQDLCk=" alt="calendar"></img>
            <p>Create your own events such as birthday party, pet meetings and more!</p>
            
            <SignIn/>
        </div>
    )
}

export default BeforeSignedIn;