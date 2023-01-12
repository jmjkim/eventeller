import { Link } from "react-router-dom";

const NavigationLinks = () => {
    return (
        <div className="navigation_list">
            <Link to="/">HOME</Link>
            <Link to="/about">ABOUT</Link>
            <Link to="/events">VIEW ALL EVENTS</Link> 
            <Link to="/events/new">CREATE NEW EVENT</Link>
            <Link to="/events/manage">MANAGE MY EVENTS</Link>
        </div>  
    )
}

export default NavigationLinks;