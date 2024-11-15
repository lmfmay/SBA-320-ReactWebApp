function UserCard ({name, description}) {
  // const [{name, description}] = userProfiles.map(profile => [profile.name, profile.description]);

  return (
    <div className="userCard">
      <img></img>
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
}

export default UserCard