import AudioPlayer from "./AudioPlayer";
import { getAudio } from "../../utilities/controllers.mjs";
import { useState, useEffect } from "react";

// function UserCard ({name, description, voice_sample}) {
//   const [audioProfiles, setAudioProfiles] = useState([]);
//   const [audioProfile, setAudioProfile] = useState({});
//   const [userAudioSrc, setUserAudioSrc] = useState('');

//   async function getAudioArray (){
//     let res = await getAudio();
//     setAudioProfiles(res.data);
//     const voiceProfile = audioProfiles.find((voiceProfile) => voiceProfile.id === voice_sample);
//     setAudioProfile(voiceProfile);
//     setUserAudioSrc(audioProfile["sample"]);
//   }
  
//   useEffect(()=>{
//     getAudioArray()
//   },[])

//   return (
//     <div className="userCard">
//       <img></img>
//       <h3>{name}</h3>
//       <p>{description}</p>
//       <AudioPlayer url = {userAudioSrc}/>
//     </div>
//   );
// }

// export default UserCard


function UserCard({ name, description, audioProfile }) {
  const userAudioSrc = audioProfile?.sample || ""; // Get the audio source if available

  return (
    <div className="userCard">
      <img alt={`${name}'s avatar`} />
      <h3>{name}</h3>
      <p>{description}</p>
      {userAudioSrc ? <AudioPlayer url={userAudioSrc} /> : <p>No audio available</p>}
    </div>
  );
}

export default UserCard;