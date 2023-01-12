import { useContext, useState } from "react";
import { UserContext } from "../../context/user";

import SignUp from "../UserSession/SignUp";

const SignIn = () => {
    const { signIn } = useContext(UserContext)
    const [ inputs, setInputs ] = useState({})
    const [ errors, setErrors ] = useState("")
    const [ showSignUp, setShowSignUp ] = useState(false)
    
    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSignInSubmit = (e) => {
        e.preventDefault()
        
        fetch("/signin", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ 
                username: inputs.username, 
                password: inputs.password 
            })
        })
        .then(r => r.json())
        .then(data => {
            if (!data.error) 
                signIn(data)

            else {
                setErrors(data.error)
                setInputs("")
            } 
        })
    }

    if (showSignUp)
        return <SignUp setShowSignUp={setShowSignUp}/>

    else
        return (
            <div className="signin_form_container">
                <form id="signin_form" onSubmit={handleSignInSubmit}>
                    <label>Username</label>
                    <input onChange={handleChange} 
                           type="text"
                           name="username"
                           value={inputs.username || ""}   
                           autoComplete="off"/>

                    <label>Password</label>
                    <input onChange={handleChange} 
                           type="password"
                           name="password"
                           value={inputs.password || ""}
                           autoComplete="off"/>

                    <div className="btn_container">
                        <button type="submit" >Submit</button>
                        <button onClick={() => setShowSignUp(true)}>Sign Up</button>
                    </div>
                    
                    {errors ? <li>Incorrect username or password</li> : null}
                </form>
            </div>
        )

}

export default SignIn;