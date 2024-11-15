import UserCard from "./UserCard";
import { userProfiles } from "../utilities/data.mjs";

function UserCardCollection () {
    const userCards = userProfiles.map((profile, i)=>{
        return <UserCard key = {i} {...profile}/>
    })
    return (
        <section className='userCardContain'>
            {userCards}
        </section>
    )
}

export default UserCardCollection