import { Link } from "react-router-dom";
import "../styles/navstyle.css";
import PathConstants from "../routes/pathConstants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";
import Logo from "../assets/VectorLogo.svg";

export default function Nav() {
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
            <img src="https://placehold.co/50x50" alt="logo" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
