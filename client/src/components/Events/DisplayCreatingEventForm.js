import { useContext } from "react"
import { UserContext } from "../../context/user"

import CreateNewEventForm from "./Form/CreateNewEventForm"

const DisplayCreatingEventForm = () => {
    document.title = "Create"
    const { userSignedIn, userNotSignedIn } = useContext(UserContext)
    
    if (userSignedIn)
        return <CreateNewEventForm/>

    else 
        return userNotSignedIn()
}

export default DisplayCreatingEventForm;