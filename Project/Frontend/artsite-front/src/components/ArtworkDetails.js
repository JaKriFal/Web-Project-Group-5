import React from 'react';
import "../styles/mainstyle.css";
import "../styles/artworkdetailsstyle.css";

const ArtworkDetails = ({ artwork }) => {
  const { title, images, description, tags } = artwork;

  return (
    <div className="artwork-details">
      <h2>{title}</h2>
      <div className="artwork-images">
        {images.map((image, index) => (
          <img key={index} src={`uploads/${image}`} alt={`Artwork ${index + 1}`} />
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