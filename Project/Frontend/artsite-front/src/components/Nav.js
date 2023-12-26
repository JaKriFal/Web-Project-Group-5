import { Link } from "react-router-dom";
import "../styles/mainstyle.css";
import "../styles/navstyle.css";
import PathConstants from "../routes/pathConstants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";
import { faImages } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { faSquarePen } from "@fortawesome/free-solid-svg-icons";
import Logo from "../assets/VectorLogo.svg";
import DefaultProfile from "../assets/User_box_duotone.svg";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";

export default function Nav() {
  const { user } = useAuthContext();
  const { logout } = useLogout();
  const handleClick = async () => {
    await logout();
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
          <Link to={PathConstants.JOBS}>Jobs</Link>
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
        {user && (
          <>
            <li className="nav-button">
              <Link to={PathConstants.NEW}>
                <FontAwesomeIcon
                  icon={faArrowUpFromBracket}
                  size="xl"
                  className="nav-icons"
                />
              </Link>
            </li>
            <li className="nav-button">
              <Link to={PathConstants.MANAGEPORTFOLIO}>
                <FontAwesomeIcon
                  icon={faImages}
                  size="xl"
                  className="nav-icons"
                />
              </Link>
            </li>
            <li className="nav-button">
              <Link to={PathConstants.NEWJOB}>
                <FontAwesomeIcon
                  icon={faGear}
                  size="xl"
                  className="nav-icons"
                />
              </Link>
            </li>
            <li className="nav-button">
              <Link to={PathConstants.HOME}>
                <img src={DefaultProfile} alt="profile" />
              </Link>
            </li>
            <li className="nav-button">
              <Link to={PathConstants.HOME}>
                <FontAwesomeIcon
                  icon={faRightFromBracket}
                  size="xl"
                  className="nav-icons"
                  onClick={handleClick}
                />
              </Link>
            </li>
          </>
        )}
        {!user && (
          <>
            <li className="nav-button">
              <span className="signup">
                <Link to={PathConstants.REGISTER} className="signup-text">
                  <FontAwesomeIcon icon={faSquarePen} className="signup-icon" />
                  Signup
                </Link>
              </span>
            </li>
            <li className="nav-button">
              <span className="login">
                <Link to={PathConstants.LOGIN} className="login-text">
                  <FontAwesomeIcon
                    icon={faRightToBracket}
                    className="login-icon"
                  />
                  Login
                </Link>
              </span>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
