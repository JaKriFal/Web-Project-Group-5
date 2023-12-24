import React from "react";
import "../styles/mainstyle.css";
import "../styles/artworkdetailsstyle.css";
import { Link } from "react-router-dom";
import PathConstants from "../routes/pathConstants";

const ArtworkDetails = ({ artwork }) => {
  const { title, images, description, tags, thumbnail } = artwork;

  return (
    <div className="artwork-details">
      <Link to={PathConstants.VIEW}>
        <img src={`uploads/${thumbnail}`} alt="Artwork Thumbnail" />
      </Link>
    </div>
  );
};

export default ArtworkDetails;
