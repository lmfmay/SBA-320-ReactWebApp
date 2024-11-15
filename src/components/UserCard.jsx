import { userProfiles } from "../utilities/data.mjs";

function UserCard () {
  return (
    userProfiles.map((profile)=>{
      return (
          <div className="userCard">
            <img></img>
            <h3>{profile.name}</h3>
            <p>{profile.description}</p>
          </div>
      )
    })
    
  );
}

export default UserCard