import { useContext } from "react";
import { UserContext } from "../context/user";
import { Link } from "react-router-dom";

import AboutContent from "./AboutContent";

const About = () => {
    document.title = "About"
    
    const { userSignedIn, userNotSignedIn } = useContext(UserContext)

    return (
        <div className="about_container">
            <AboutContent/>

            {userSignedIn ? 
                <div className="btn_container">
                    <Link to="/">Back to Main</Link>
                </div> : userNotSignedIn()}
        </div>
    )
}

export default About;