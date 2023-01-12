import { useContext } from "react";
import { UserContext } from "../../context/user";
import NavigationLinks from "./NavigationLinks";
import UserProfile from "./UserProfile";

const Navigation = () => {
    const { user, userSignedIn, signOut } = useContext(UserContext)

    if (userSignedIn)
        return (
            <div className="navigation_container">
                <NavigationLinks/>
                <UserProfile user={user} signOut={signOut}/>
            </div>
        )

    else 
        return null
}

export default Navigation;