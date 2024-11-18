import AudioPlayer from "./AudioPlayer";

function UserCard({ name, description, accent, gender, audioProfile }) {
  const userAudioSrc = audioProfile.sample

  return (
    <div className="userCard">
      {/* <img alt={`${name}'s avatar`} /> */}
      <h3>{name}</h3>
      <p>{description}</p>
      <p style={{color:'blue', fontStyle:'italic'}}>Accent: {accent[0].toUpperCase() + accent.substring(1)}</p>
      <p style={{color:'blue', fontStyle:'italic'}}>Gender: {gender[0].toUpperCase() + gender.substring(1)}</p>

      {userAudioSrc ? <AudioPlayer url={userAudioSrc} /> : <p>No audio available</p>}
    </div>
  );
}

export default UserCard;