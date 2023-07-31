import profile from "../imgs/profile.png"
import "./Profile.css"

const Profile = () => {
  return (
    <div className="profile-container">
        <img src={profile} alt="profile" className="profile"/>
    </div>
  )
}

export default Profile