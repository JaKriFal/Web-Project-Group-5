import React from "react";
import "../styles/mainstyle.css";
import "../styles/artworkdetailsstyle.css";

const ArtworkDetails = ({ artwork }) => {
  const { title, images, description, tags, thumbnail } = artwork;

  return (
    <div className="artwork-details">
      <img
        src={`uploads/${thumbnail}`}
        alt="Artwork Thumbnail"
        style={{ maxWidth: "250px", maxHeight: "250px" }}
      />
      <h2>{title}</h2>
      <div className="artwork-images">
        {images.map((image, index) => (
          <img
            key={index}
            src={`uploads/${image}`}
            alt={`Artwork ${index + 1}`}
            style={{ maxWidth: "300px", maxHeight: "300px" }}
          />
        ))}
      </div>
      <p>{description}</p>
      <div className="artwork-tags">
        <strong>Tags:</strong>
        {tags.map((tag, index) => (
          <span key={index}>{tag}</span>
        ))}
      </div>
    </div>
  );
};

export default ArtworkDetails;
