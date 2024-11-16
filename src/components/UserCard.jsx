import AudioPlayer from "./AudioPlayer";

function UserCard({ name, description, audioProfile }) {
  const userAudioSrc = audioProfile.sample

  return (
    <div className="userCard">
      {/* <img alt={`${name}'s avatar`} /> */}
      <h3>{name}</h3>
      <p>{description}</p>
      {userAudioSrc ? <AudioPlayer url={userAudioSrc} /> : <p>No audio available</p>}
    </div>
  );
}

export default UserCard;