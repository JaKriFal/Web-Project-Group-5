import { Link } from "react-router-dom";
import "../styles/viewstyle.css";
import PathConstants from "../routes/pathConstants";

export default function Nav() {
  return (
    <div className="maincontainer">
  <div className="leftcontainer">
    <a href="#">
      <img src="https://placehold.co/800x600" alt="bigpic" />
    </a>
    <a href="#">
      <img src="https://placehold.co/200x150" alt="smallpic" />
    </a>
    <a href="#">
      <img src="https://placehold.co/500x375" alt="medpic" />
    </a>
  </div>
  <div className="rightcontainer">
    <div className="user">
      <a href="#">
        <img src="https://placehold.co/150x150" alt="smallpic" />
      </a>
      <div className="usertext">
        <h2>Username</h2>
        <p>Profession</p>
      </div>
    </div>
    <div className="tags">
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
    </div>
    <div className="comments">
      <form className="comment" action="#">
        <input type="text" placeholder="Add a comment" name="search" />
      </form>
    </div>
  </div>
</div>


  );
}