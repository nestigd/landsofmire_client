import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";

function Navbar() {
  const {logout} = useLogout();
  const {user} = useAuthContext();

  return (
    <div className="navbar">
      <div className="nav-left">
        <Link className="nav-link nav-link--logo" to="/">
          <span>Lands of Mire</span>
        </Link>
      </div>
      <div className="nav-center">
        <Link className="nav-link" to="/game">
          <span>Game</span>
        </Link>
        <Link className="nav-link" to="/store">
          <span>Store</span>
        </Link>
        <Link className="nav-link" to="/lore">
          <span>Lore</span>
        </Link>
      </div>
    
      {!user && (
        <div className="nav-right">
          <Link className="nav-link nav-btn" to="/signup">
            <span>Sign up</span>
          </Link>
          <Link className="nav-link nav-btn--login" to="/login">
            <span>Log in</span>
          </Link >
        </div> 
      )}
  
      {user && (
        <div className="nav-right">
          <div className="username nav-link">
            <span>
              {user && user.email}
            </span>
          </div>
          <button className="nav-link logout" href="#" onClick={logout}>
            <span>Log out</span> 
          </button>
        </div>
      )}
    </div>
  );
}

export default Navbar;
