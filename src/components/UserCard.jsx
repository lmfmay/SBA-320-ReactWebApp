import AudioPlayer from "./AudioPlayer";
import { getAudio } from "../../utilities/controllers.mjs";
import { useState, useEffect } from "react";

function UserCard ({name, description, voice_sample}) {
  const [userAudioSrc, setUserAudioSrc] = useState('');
  const [audioProfiles, setAudioProfiles] = useState([]);
  const [audioProfile, setAudioProfile] = useState({});

  async function getAudioArray (){
    let res = await getAudio();
    setAudioProfiles(res.data);
    const voiceProfile = audioProfiles.find((voiceProfile) => voiceProfile.id === voice_sample);
    setAudioProfile(voiceProfile);
    setUserAudioSrc(audioProfile["sample"]);
  }
  
  useEffect(()=>{
    getAudioArray()
  },[])

  // useEffect(()=>{
  //   const profile = audioProfiles.find((profile) => profile.id === voice_sample);
  //   setAudioProfile(profile)
  //   setUserAudioSrc(audioProfile.sample)
  // },[audioProfile])
 
 

  return (
    <div className="userCard">
      <img></img>
      <h3>{name}</h3>
      <p>{description}</p>
      <AudioPlayer url = {userAudioSrc}/>
      {/* <AudioPlayer name = {name}/> */}
      {/* <audio controls>
        <source src={userAudioSrc} type="audio/mpeg"/>
        Your browser does not support the audio element.
      </audio> */}
    </div>
  );
}

export default UserCard