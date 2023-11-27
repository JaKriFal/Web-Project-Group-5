import { Link } from "react-router-dom";
import "../styles/navstyle.css";
//import PathConstants from "../routes/pathConstants";

export default function Nav() {
  return (
    <nav className="navbar">
  <a href="#" className="logo">
    <img src="https://placehold.co/50x50" alt="logo" />
  </a>
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
      <i className="fa fa-search" />
    </button>
    <input type="text" placeholder="Search.." name="search" />
  </form>
  <ul className="nav-buttons">
    <li className="nav-button">
      <a href="#">
        <img src="https://placehold.co/50x50" alt="logo" />
      </a>
    </li>
    <li className="nav-button">
      <a href="#">
        <img src="https://placehold.co/50x50" alt="logo" />
      </a>
    </li>
    <li className="nav-button">
      <a href="#">
        <img src="https://placehold.co/50x50" alt="logo" />
      </a>
    </li>
    <li className="nav-button">
      <a href="#">
        <img src="https://placehold.co/50x50" alt="logo" />
      </a>
    </li>
    <li className="nav-button">
      <a href="#">
        <img src="https://placehold.co/50x50" alt="logo" />
      </a>
    </li>
  </ul>
</nav>

  );
}