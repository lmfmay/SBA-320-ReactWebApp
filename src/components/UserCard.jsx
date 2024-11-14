import {useState, useEffect} from "react";
import { getAudio } from "../utilities/controllers.mjs";
import { userProfiles } from "../utilities/data.mjs";

function UserProfile() {
    const [audio, setAudio] = useState(null); //get audio data from third party API
    const [playing, setPlaying] = useState(false) //set state of audio playing/notplaying

    // const [name, description, textToAudio] = [
    //     userProfiles.map((userProfile)=>userProfile.name),
    //     userProfiles.map((userProfile)=>userProfile.description),
    //     userProfiles.map((userProfile)=>userProfile.textToAudio)
    // ]
  

    async function handlePlayAudio(textToAudio){
        setPlaying(true)
        let res = await getAudio(textToAudio);
        setAudio(res)
        setPlaying(false)
        //console.log(textToAudio)
    }
    // const handlePlayAudio = async () => {
    //   setLoading(true);
    //   setAudioUrl(null);
    // };
  
    return (
      <div className="user-profile">
        {userProfiles.map (userProfile => {
            return(
                <>
                    <h2>{userProfile.name}</h2>
                    <p>{userProfile.description}</p>
                    <p>{userProfile.textToAudio}</p>
                    <button onClick={()=>handlePlayAudio(userProfile.textToAudio)} disabled={playing}>
                    {playing ? 'Loading...' : 'Play Audio'}
                    </button>
            
                    {audio && (
                    <audio controls autoPlay>
                        <source src={audio} type="audio/mp3" />
                        Your browser does not support the audio element.
                    </audio>
                    )}
                </>
            )
        })}
      </div>
    );
  }
  
  export default UserProfile;