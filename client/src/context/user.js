import React, { useState, useEffect} from 'react';
import { useNavigate, Link } from 'react-router-dom';

const UserContext = React.createContext()

const UserProvider = ({ children }) => {
    const [ user, setUser ] = useState({})
    const [ userSignedIn, setUserSignedIn ] = useState(false)
    const [ events, setEvents ] = useState([])
    const [ flag, setFlag ] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        fetch("/usersignedin")
        .then(r => r.json())
        .then(data => {
            if (!data.error) {
                setUser(data)
                setUserSignedIn(true)
            }

            else 
                setUserSignedIn(false) 
        })
    }, [flag])

    useEffect(() => {
        fetch("/events")
        .then(r => r.json())
        .then(data => {
            if (!data.error) {
                setEvents(data)
                setFlag(false)
            }
        })
    }, [userSignedIn, flag]);

    const signUp = (user) => {
        setUser(user)
        setUserSignedIn(true)
    }

    const signIn = (user) => {
        setUser(user)
        setUserSignedIn(true)
    }

    const signOut = () => {
        setUser({})
        setUserSignedIn(false)
        navigate("/")
    }

    const userNotSignedIn = () => {
        return (
            <div className="not_signed_in">
                <h1>Please sign in</h1>
                <Link to="/">Sign In</Link>
            </div>
        )
    }

    return (
        <UserContext.Provider value={{ user, userSignedIn, signUp, signIn, signOut, userNotSignedIn, events, setEvents, setFlag }}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider }