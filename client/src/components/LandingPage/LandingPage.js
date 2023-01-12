import { useContext } from "react"
import { UserContext } from "../../context/user"

import AfterSignedIn from "./AfterSignedIn"
import BeforeSignedIn from "./BeforeSignedIn"

const LandingPage = () => {
    const { userSignedIn } = useContext(UserContext)

    if (userSignedIn) 
        return <AfterSignedIn/>

    else 
        return <BeforeSignedIn/>
}

export default LandingPage;