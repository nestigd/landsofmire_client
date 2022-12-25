import { Link } from "react-router-dom"

function MainBtn(props){
    const{to, btnText} = props

    return(
    <Link to={to} className="main-button">
        {btnText}
    </Link>
)}

export default MainBtn