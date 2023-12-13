import { Link } from "react-router-dom";
import "../styles/mainstyle.css";
import "../styles/navstyle.css";
import PathConstants from "../routes/pathConstants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";
import Logo from "../assets/VectorLogo.svg";
import DefaultProfile from "../assets/User_box_duotone.svg";
import { useAuthContext } from '../hooks/useAuthContext';
import { useLogout } from '../hooks/useLogout'


export default function Nav() {
  const { user } = useAuthContext()
  const { logout } = useLogout()
  const handleClick = async () => {
    await logout()
  };

  return (
    <nav className="navbar">
      <Link to={PathConstants.HOME}>
        <img src={Logo} alt="logo" />
      </Link>
      <ul className="nav-links">
        <li className="nav-item">
          <a href="#">Artists</a>
        </li>
        <li className="nav-item">
          <a href="#">Jobs</a>
        </li>
        <li className="nav-item">
          <a href="#">FAQ</a>
        </li>
      </ul>
      <form className="searchbar" action="#">
        <button type="submit">
          <FontAwesomeIcon icon={faSearch} />
        </button>
        <input type="text" placeholder="Search.." name="search" />
      </form>
      <ul className="nav-buttons">
        <li className="nav-button">
          <Link to={PathConstants.NEW}>
            <FontAwesomeIcon
              icon={faArrowUpFromBracket}
              size="xl"
              className="icon"
            />
          </Link>
        </li>
        <li className="nav-button">
          <Link to={PathConstants.MANAGEPORTFOLIO}>
            <img src="https://placehold.co/50x50" alt="logo" />
          </Link>
        </li>
        <li className="nav-button">
          <Link to={PathConstants.NEWJOB}>
            <img src="https://placehold.co/50x50" alt="logo" />
          </Link>
        </li>
        <li className="nav-button">
          <Link to={PathConstants.HOME}>
            <img src="https://placehold.co/50x50" alt="logo" />
          </Link>
        </li>
        <li className="nav-button">
          <Link to={PathConstants.HOME}>
            <img src={DefaultProfile} alt="profile" />
          </Link>
        </li>
        <li className="nav-button">
          {user && (
            <div>
              <span>{user.email}</span>
              <button onClick={handleClick}>Log out</button>
            </div>
          )}
          {!user && (
            <div>
              <Link to={PathConstants.LOGIN}>Login</Link>
              <Link to={PathConstants.REGISTER}>Signup</Link>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
}
