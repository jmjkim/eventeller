import { useNavigate } from "react-router-dom"

const UserProfile = ({user, signOut}) => {
    const navigate = useNavigate()

    const handleSignOut = () => {
        fetch("/signout", { method: "DELETE" })
        .then(() => {
            signOut()
            navigate("/")
        })
    }

    return (
        <div className="user_profile_container">
            <p>Welcome {user.username}</p>
            
            <div className="btn_container">
                <button onClick={() => handleSignOut()}>Sign Out</button>
            </div>
        </div>
    )
}

export default UserProfile;