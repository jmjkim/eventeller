import { useState } from "react"
import DisplayErrors from "../DisplayErrors"

const SignUp = ({setShowSignUp}) => {
    const [ inputs, setInputs ] = useState({})
    const [ errors, setErrors ] = useState([])

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setInputs(values => ({...values, [name]: value}))
    }
    
    const handleSignUpSubmit = (e) => {
        e.preventDefault()
    
        fetch("/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(inputs)
        })
        .then(r => r.json())
        .then(data => {
            if (!data.error) {
                alert("User succesfully created!")
                setShowSignUp(false)
            }
            else 
                setErrors(data.error)
            })
    }

    return (
        <div className="signup_form_container">
            <form id="signup_form" onSubmit={handleSignUpSubmit}>
                <h2>Create New Account</h2>

                <label>Username</label>
                <input type="text" 
                       name="username" 
                       value={inputs.name}
                       onChange={handleChange}
                       required={true}
                       maxLength={12}
                       autoComplete="off"/>

                <label>Password</label>
                <input type="password" 
                       name="password" 
                       value={inputs.password} 
                       onChange={handleChange}
                       required={true}
                       maxLength={12}
                       autoComplete="off"/>

                <label>Confirm Password</label>
                <input type="password" 
                       name="password_confirmation" 
                       value={inputs.passwordConfirmation} 
                       onChange={handleChange}
                       required={true}
                       maxLength={12}
                       autoComplete="off"/>

                <label>First Name</label>
                <input type="text" 
                       name="first_name" 
                       value={inputs.first_name} 
                       onChange={handleChange}
                       required={true}
                       maxLength={20}
                       autoComplete="off"/>

                <label>Last Name</label>
                <input type="text" 
                       name="last_name" 
                       value={inputs.last_name} 
                       onChange={handleChange}
                       required={true}
                       maxLength={20}
                       autoComplete="off"/>

                <label>Phone#</label>
                <input type="text" 
                       name="phone" 
                       value={inputs.phone} 
                       onChange={handleChange}
                       required={true}
                       maxLength={10}
                       autoComplete="off"/>

                <label>Email</label>
                <input type="text" 
                       name="email" 
                       value={inputs.email} 
                       onChange={handleChange}
                       required={true}
                       maxLength={30}
                       autoComplete="off"/>
                       
              <div className="btn_container">
                <button type="submit">Submit</button>
                <button onClick={() => setShowSignUp(false)}>Back to main</button>
              </div>

              <DisplayErrors errors={errors}/>
            </form>
        </div>
    )
}

export default SignUp;