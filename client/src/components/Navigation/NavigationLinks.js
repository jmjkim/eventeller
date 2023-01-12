import { Link } from "react-router-dom";

const NavigationLinks = () => {
    return (
        <div className="navigation_list">
            <Link to="/">HOME</Link>
            <Link to="/about">ABOUT</Link>
            <Link to="/events">VIEW ALL EVENTS</Link> 
            <Link to="/create_new_event">CREATE NEW EVENT</Link> 
            <Link to="/manage_event">MANAGE MY EVENTS</Link>
        </div>  
    )
}

export default NavigationLinks;