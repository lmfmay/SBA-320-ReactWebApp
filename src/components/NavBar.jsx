import { Link } from "react-router-dom"

function NavBar () {
    return (
        <nav className="NavBar">
            <img src="../assets/mocklogo.png" alt="" />
            <Link to={'/'}>Home</Link>
        </nav>
    )
}

export default NavBar