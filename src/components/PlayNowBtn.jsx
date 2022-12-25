import { Link } from "react-router-dom"

function PlayNowBtn(){
    //conditionally render play now button or login button
    //TODO: make hard coded loggedIn prop dynamic
    const loggedIn = true

    return(
   
    <Link to={loggedIn ? "/game" : "/auth"} className="main-button">
        {loggedIn ? "Play Now" : "Sign up or Log in"}
    </Link>

)
}

export default PlayNowBtn