import { getAudio } from "../../utilities/controllers.mjs";
import { userProfiles } from '../../utilities/data.mjs';
import {useState, useEffect} from 'react';
import UserCard from "./UserCard";


function UserCardCollection() {
    const [audioProfiles, setAudioProfiles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
   
    // Fetch audio profiles once when the component mounts
    useEffect(() => {
      async function fetchAudioProfiles() {
        try {
          let res = await getAudio(); // get audio profiles from controller
          setAudioProfiles(res.data);
          setLoading(false);
        } catch (err) {
          console.error("Error fetching audio profiles:", err);
          setError("Failed to load audio profiles");
          setLoading(false);
        }
      }
  
      fetchAudioProfiles();
    }, []);
  
    if (loading) {
      return <p>Loading audio profiles...</p>;
    }
  
    if (error) {
      return <p>{error}</p>;
    }
  
    // Map user profiles to user cards and pass the relevant audio profile
    const userCards = userProfiles.map((profile, i) => {
        // Find the matching audio profile for the user's voice_sample
        const audioProfile = audioProfiles.find((audio) => audio.id === profile.voice_sample);

        return (
        <UserCard
            key={i}
            {...profile}
            audioProfile={audioProfile} // Pass down the audio profile as prop
        />
        );
    });
  
    return (
        <section className="userCardContain">
            {userCards}
        </section>
    );
  }

export default UserCardCollection