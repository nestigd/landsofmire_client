import { Link } from "react-router-dom"

function Navbar () {
    return(
        <div className="navbar">

            <div className="nav-left">

            <Link className="nav-link nav-link--logo" to="/">
                <span >Lands of Mire</span>
            </Link>
            </div>

            <div className="nav-center">
                <Link className="nav-link" to="#">
                    <span >Game</span>
                </Link>
                <Link className="nav-link" to="#">
                    <span >Lore</span>
                </Link>
                <Link className="nav-link" to="#">
                    <span >Store</span>
                </Link>
            </div>

            <div className="nav-right">
            <Link className="nav-link nav-btn" to="#">
                <span >Sign up</span>
            </Link>
            <Link className="nav-link nav-btn--login" to="/shop">
                <span >Log in</span>
            </Link>
            </div>
            
            
           
        </div>
    )
}

export default Navbar