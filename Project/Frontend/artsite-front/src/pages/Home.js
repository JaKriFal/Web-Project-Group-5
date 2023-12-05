import { Link } from "react-router-dom";
import "../styles/mainstyle.css";
import PathConstants from "../routes/pathConstants";

export default function Home() {
  return (
    <>
  <h2>Tags</h2>
  <ul className="tagcontainer">
    <li>
      <a href="#">All</a>
    </li>
    <li>
      <a href="#">Traditional</a>
    </li>
    <li>
      <a href="#">Fan Art</a>
    </li>
    <li>
      <a href="#">Character Design</a>
    </li>
    <li>
      <a href="#">Wallpaper</a>
    </li>
    <li>
      <a href="#">Cyberpunk</a>
    </li>
  </ul>
  <ul className="artcontainer">
    <li>
    <Link to={PathConstants.VIEW}><img src="https://placehold.co/250x250" alt="logo" />
        <img src="https://placehold.co/250x250" alt="logo" /></Link>

    </li>
    <li>
    <Link to={PathConstants.VIEW}><img src="https://placehold.co/250x250" alt="logo" />
        <img src="https://placehold.co/250x250" alt="logo" /></Link>

    </li>
    <li>
    <Link to={PathConstants.VIEW}><img src="https://placehold.co/250x250" alt="logo" />
        <img src="https://placehold.co/250x250" alt="logo" /></Link>

    </li>
    <li>
    <Link to={PathConstants.VIEW}><img src="https://placehold.co/250x250" alt="logo" />
        <img src="https://placehold.co/250x250" alt="logo" /></Link>

    </li>
    <li>
    <Link to={PathConstants.VIEW}><img src="https://placehold.co/250x250" alt="logo" />
        <img src="https://placehold.co/250x250" alt="logo" /></Link>

    </li>
    <li>
    <Link to={PathConstants.VIEW}><img src="https://placehold.co/250x250" alt="logo" />
        <img src="https://placehold.co/250x250" alt="logo" /></Link>

    </li>
    <li>
    <Link to={PathConstants.VIEW}><img src="https://placehold.co/250x250" alt="logo" />
        <img src="https://placehold.co/250x250" alt="logo" /></Link>

    </li>
    <li>
    <Link to={PathConstants.VIEW}><img src="https://placehold.co/250x250" alt="logo" />
        <img src="https://placehold.co/250x250" alt="logo" /></Link>

    </li>
    <li>
    <Link to={PathConstants.VIEW}><img src="https://placehold.co/250x250" alt="logo" />
        <img src="https://placehold.co/250x250" alt="logo" /></Link>

    </li>
    <li>
    <Link to={PathConstants.VIEW}><img src="https://placehold.co/250x250" alt="logo" />
        <img src="https://placehold.co/250x250" alt="logo" /></Link>

    </li>
    <li>
    <Link to={PathConstants.VIEW}><img src="https://placehold.co/250x250" alt="logo" />
        <img src="https://placehold.co/250x250" alt="logo" /></Link>

    </li>
    <li>
    <Link to={PathConstants.VIEW}><img src="https://placehold.co/250x250" alt="logo" />
        <img src="https://placehold.co/250x250" alt="logo" /></Link>

    </li>
    <li>
    <Link to={PathConstants.VIEW}><img src="https://placehold.co/250x250" alt="logo" />
        <img src="https://placehold.co/250x250" alt="logo" /></Link>

    </li>
    <li>
    <Link to={PathConstants.VIEW}><img src="https://placehold.co/250x250" alt="logo" />
        <img src="https://placehold.co/250x250" alt="logo" /></Link>

    </li>
    <li>
    <Link to={PathConstants.VIEW}><img src="https://placehold.co/250x250" alt="logo" />
        <img src="https://placehold.co/250x250" alt="logo" /></Link>

    </li>
  </ul>
</>



  );
}