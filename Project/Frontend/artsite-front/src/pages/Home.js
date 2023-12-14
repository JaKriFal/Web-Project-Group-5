import { useEffect } from "react";
import "../styles/mainstyle.css";
import { useArtworkGetAllContext } from "../hooks/useArtworkContext";
import { useAuthContext } from "../hooks/useAuthContext";
import ArtworkDetails from "../components/ArtworkDetails";

export default function Home() {
  const { user } = useAuthContext();
  const { artworks, dispatch } = useArtworkGetAllContext();

  useEffect(() => {
    const getGoals = async () => {
      const response = await fetch("http://localhost:4000/api/projects/");
      const data = await response.json();
      if (!response.ok) {
        console.log(data.error);
        dispatch({ type: "SET_ARTWORKS", payload: [] });
        return;
      }

      dispatch({ type: "SET_ARTWORKS", payload: data });
    };
    getGoals();
  }, [user, dispatch]);
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
      <div className="artcontainer">
        {artworks &&
          artworks.map((art) => <ArtworkDetails key={art._id} artwork={art} />)}
      </div>
    </>
  );
}
