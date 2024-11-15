import { userProfiles } from "../utilities/data.mjs";

function UserCard () {
  return (
    userProfiles.map((profile)=>{
      return (
        <div className="userCardContain">
          <img></img>
          <h3>{profile.name}</h3>
          <p>{profile.description}</p>
        </div>
      )
    })
    
  );
}

return UserCard